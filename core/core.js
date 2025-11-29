// 核心框架功能 - 模块加载和章节切换

// 模块状态管理
const ModuleManager = {
    loadedModules: new Set(),
    loadingModules: new Map(),
    
    // 模块配置
    modules: {
        'home': {
            css: '',
            js: '',
            html: ''
        },
        'atomic-world': {
            css: 'modules/atomic-world/atomic-world.css',
            js: 'modules/atomic-world/atomic-world.js',
            html: 'modules/atomic-world/atomic-world.html'
        },
        'chemical-bonds': {
            css: 'modules/chemical-bonds/chemical-bonds.css',
            js: 'modules/chemical-bonds/chemical-bonds.js',
            html: 'modules/chemical-bonds/chemical-bonds.html'
        },
        'reactions': {
            css: '',
            js: '',
            html: ''
        },
        'elements': {
            css: '',
            js: '',
            html: ''
        }
    },

    /**
     * 加载模块
     * @param {string} moduleId - 模块ID
     * @returns {Promise<void>}
     */
    async loadModule(moduleId) {
        // 如果模块已经加载，直接返回
        if (this.loadedModules.has(moduleId)) {
            return;
        }

        // 如果模块正在加载，等待加载完成
        if (this.loadingModules.has(moduleId)) {
            return this.loadingModules.get(moduleId);
        }

        const module = this.modules[moduleId];
        if (!module) {
            throw new Error(`Module ${moduleId} not found`);
        }

        // 创建加载Promise
        const loadPromise = this._loadModuleResources(moduleId, module);
        this.loadingModules.set(moduleId, loadPromise);

        try {
            await loadPromise;
            this.loadedModules.add(moduleId);
            this.loadingModules.delete(moduleId);
        } catch (error) {
            this.loadingModules.delete(moduleId);
            throw error;
        }
    },

    /**
     * 加载模块资源
     * @param {string} moduleId - 模块ID
     * @param {Object} module - 模块配置
     * @returns {Promise<void>}
     */
    async _loadModuleResources(moduleId, module) {
        const promises = [];

        // 加载HTML内容
        if (module.html) {
            promises.push(this._loadHTML(moduleId, module.html));
        }

        // 加载CSS
        if (module.css) {
            promises.push(Utils.loadCSS(module.css));
        }

        // 加载JavaScript
        if (module.js) {
            promises.push(Utils.loadModule(module.js));
        }

        await Promise.all(promises);
    },

    /**
     * 加载HTML内容
     * @param {string} moduleId - 模块ID
     * @param {string} htmlPath - HTML文件路径
     * @returns {Promise<void>}
     */
    async _loadHTML(moduleId, htmlPath) {
        try {
            const response = await fetch(htmlPath);
            if (!response.ok) {
                throw new Error(`Failed to load HTML: ${response.status}`);
            }
            const html = await response.text();
            
            // 将HTML内容插入到对应的section中
            const section = document.getElementById(moduleId);
            if (section) {
                section.innerHTML = html;
                
                // 在HTML加载完成后立即初始化模块
                // 使用setTimeout确保DOM更新完成
                setTimeout(() => {
                    this._initializeModule(moduleId);
                }, 0);
            }
        } catch (error) {
            console.error(`Failed to load HTML for module ${moduleId}:`, error);
            throw error;
        }
    },

    /**
     * 初始化模块
     * @param {string} moduleId - 模块ID
     */
    _initializeModule(moduleId) {
        console.log(`初始化模块: ${moduleId}`);
        
        // 使用更可靠的初始化方式，确保依赖已加载
        const initializeWithRetry = (moduleName, initFunction, retryCount = 0) => {
            if (window[moduleName] && typeof window[moduleName].init === 'function') {
                console.log(`开始初始化${moduleName}模块`);
                try {
                    window[moduleName].init();
                } catch (error) {
                    console.error(`${moduleName}模块初始化失败:`, error);
                    // 如果初始化失败，重试一次
                    if (retryCount < 2) {
                        console.log(`重试初始化${moduleName}模块 (${retryCount + 1}/2)`);
                        setTimeout(() => initializeWithRetry(moduleName, initFunction, retryCount + 1), 100);
                    }
                }
            } else if (retryCount < 5) {
                // 如果模块未加载，等待一下再重试
                console.log(`等待${moduleName}模块加载 (${retryCount + 1}/5)`);
                setTimeout(() => initializeWithRetry(moduleName, initFunction, retryCount + 1), 50);
            } else {
                console.error(`${moduleName}模块未找到或init方法不存在`);
            }
        };

        // 根据模块ID调用对应的初始化函数
        switch (moduleId) {
            case 'atomic-world':
                initializeWithRetry('AtomicWorld');
                break;
            case 'chemical-bonds':
                initializeWithRetry('ChemicalBonds');
                break;
            // 其他模块的初始化...
        }
    },

    /**
     * 检查模块是否已加载
     * @param {string} moduleId - 模块ID
     * @returns {boolean}
     */
    isModuleLoaded(moduleId) {
        return this.loadedModules.has(moduleId);
    },

    /**
     * 卸载模块（可选功能）
     * @param {string} moduleId - 模块ID
     */
    unloadModule(moduleId) {
        // 在实际项目中，这里可以清理模块资源
        this.loadedModules.delete(moduleId);
    }
};

// 章节管理器
const SectionManager = {
    currentSection: 'home',
    
    /**
     * 显示章节
     * @param {string} sectionId - 章节ID
     */
    async showSection(sectionId) {
        // 如果已经是当前章节，直接返回
        if (this.currentSection === sectionId) {
            return;
        }

        // 隐藏当前章节
        this.hideCurrentSection();

        // 特殊处理：首页和未开发章节不需要模块加载
        if (sectionId === 'home' || sectionId === 'reactions' || sectionId === 'elements') {
            this.displaySection(sectionId);
            this.updateNavActiveState(sectionId);
            this.currentSection = sectionId;
            window.scrollTo(0, 0);
            return;
        }

        // 如果模块已经加载，直接显示内容
        if (ModuleManager.isModuleLoaded(sectionId)) {
            this.displaySection(sectionId);
            this.updateNavActiveState(sectionId);
            this.currentSection = sectionId;
            window.scrollTo(0, 0);
            return;
        }

        // 显示加载状态
        this.showLoadingState(sectionId);

        try {
            // 加载模块
            await ModuleManager.loadModule(sectionId);
            
            // 显示目标章节
            this.displaySection(sectionId);
            
            // 更新导航状态
            this.updateNavActiveState(sectionId);
            
            // 更新当前章节
            this.currentSection = sectionId;
            
            // 滚动到顶部
            window.scrollTo(0, 0);
            
        } catch (error) {
            console.error(`Failed to load section ${sectionId}:`, error);
            this.showErrorState(sectionId, error);
        }
    },

    /**
     * 隐藏当前章节
     */
    hideCurrentSection() {
        const currentSection = document.getElementById(this.currentSection);
        if (currentSection) {
            currentSection.classList.remove('active');
        }
    },

    /**
     * 显示加载状态
     * @param {string} sectionId - 章节ID
     */
    showLoadingState(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.innerHTML = `
                <div class="module-loading">
                    <div class="spinner"></div>
                    <p>正在加载 ${sectionId} 章节...</p>
                </div>
            `;
            section.classList.add('active');
        }
    },

    /**
     * 显示错误状态
     * @param {string} sectionId - 章节ID
     * @param {Error} error - 错误对象
     */
    showErrorState(sectionId, error) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.innerHTML = `
                <div class="module-error">
                    <h3>加载失败</h3>
                    <p>无法加载 ${sectionId} 章节：${error.message}</p>
                    <button class="btn" onclick="SectionManager.showSection('${sectionId}')">重试</button>
                </div>
            `;
            section.classList.add('active');
        }
    },

    /**
     * 显示章节内容
     * @param {string} sectionId - 章节ID
     */
    displaySection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }
    },

    /**
     * 更新导航激活状态
     * @param {string} activeSection - 激活的章节ID
     */
    updateNavActiveState(activeSection) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.substring(1) === activeSection) {
                link.style.background = '#667eea';
                link.style.color = 'white';
            } else {
                link.style.background = '';
                link.style.color = '';
            }
        });
    }
};

// 导航管理器
const NavigationManager = {
    /**
     * 初始化导航
     */
    init() {
        this.setupNavLinks();
        this.setupKeyboardNavigation();
        this.setupFrameworkCards();
    },

    /**
     * 设置导航链接
     */
    setupNavLinks() {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                if (targetId) {
                    SectionManager.showSection(targetId);
                }
            });
        });
    },

    /**
     * 设置键盘导航
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                SectionManager.showSection('home');
            }
        });
    },

    /**
     * 设置课程框架卡片
     */
    setupFrameworkCards() {
        const frameworkCards = document.querySelectorAll('.framework-card');
        frameworkCards.forEach(card => {
            card.addEventListener('click', () => {
                const targetId = card.getAttribute('onclick')?.match(/'(.*?)'/)?.[1];
                if (targetId) {
                    SectionManager.showSection(targetId);
                }
            });
        });
    }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', function () {
    // 加载共享工具
    Utils.loadCSS('shared/utils.js');
    Utils.loadModule('shared/constants.js');
    
    // 初始化导航
    NavigationManager.init();
    
    // 默认显示首页
    SectionManager.showSection('home');
    
    console.log('化学课程系统初始化完成');
});

// 全局导出
window.ModuleManager = ModuleManager;
window.SectionManager = SectionManager;
window.NavigationManager = NavigationManager;

// 全局章节切换函数（兼容旧代码）
function showSection(sectionId) {
    SectionManager.showSection(sectionId);
}
