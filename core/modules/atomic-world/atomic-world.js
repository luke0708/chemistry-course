// 原子世界模块功能

const AtomicWorld = {
    elementsData: null,
    
    /**
     * 初始化原子世界模块
     */
    async init() {
        try {
            // 加载元素数据
            this.elementsData = await Utils.loadJSON('assets/data/elements.json');
            
            // 初始化原子模型
            this.updateAtomModel('Li');
            
            // 创建简化周期表
            this.createSimplePeriodicTable();
            
            // 创建元素性质对比表格
            this.createComparisonTable();
            
            console.log('原子世界模块初始化完成');
        } catch (error) {
            console.error('原子世界模块初始化失败:', error);
            Utils.showMessage('原子世界模块加载失败', 'error');
        }
    },

    /**
     * 更新原子模型
     * @param {string} elementSymbol - 元素符号
     */
    updateAtomModel(elementSymbol) {
        const element = this.elementsData[elementSymbol];
        const atomModel = document.getElementById('atom-model');
        const atomInfo = document.getElementById('atom-info');

        if (!element) return;

        // 更新原子模型可视化
        atomModel.innerHTML = this.generateAtomVisualization(element);
        atomInfo.innerHTML = this.generateElementInfo(element);
    },

    /**
     * 生成原子可视化
     * @param {Object} element - 元素数据
     * @returns {string} HTML字符串
     */
    generateAtomVisualization(element) {
        const { protons, neutrons, electrons, name } = element;

        return `
            <div class="atom-visualization">
                <div class="nucleus">
                    <div class="proton">p⁺</div>
                    <div class="neutron">n⁰</div>
                    <div class="nucleus-label">原子核 (${protons}p⁺ + ${neutrons}n⁰)</div>
                </div>
                ${this.generateElectronShells(electrons)}
                <div class="element-name">${name}原子</div>
            </div>
        `;
    },

    /**
     * 生成电子层
     * @param {number} electronCount - 电子数量
     * @returns {string} HTML字符串
     */
    generateElectronShells(electronCount) {
        let shells = '';
        let remainingElectrons = electronCount;

        // 使用共享常量
        const shellCapacity = Constants.SHELL_CAPACITY;
        const shellNames = Constants.SHELL_NAMES;

        for (let i = 0; i < shellCapacity.length && remainingElectrons > 0; i++) {
            const electronsInShell = Math.min(shellCapacity[i], remainingElectrons);
            const radius = 40 + i * 60;

            shells += `
                <div class="electron-shell" style="width: ${radius * 2}px; height: ${radius * 2}px;">
                    <div class="shell-label">${shellNames[i]}层 (${electronsInShell}e⁻)</div>
                    ${this.generateElectrons(electronsInShell, radius)}
                </div>
            `;

            remainingElectrons -= electronsInShell;
        }

        return shells;
    },

    /**
     * 生成电子
     * @param {number} count - 电子数量
     * @param {number} radius - 轨道半径
     * @returns {string} HTML字符串
     */
    generateElectrons(count, radius) {
        let electrons = '';
        const angleStep = (2 * Math.PI) / count;

        for (let i = 0; i < count; i++) {
            const angle = i * angleStep;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            electrons += `
                <div class="electron" style="transform: translate(${x}px, ${y}px)">e⁻</div>
            `;
        }

        return electrons;
    },

    /**
     * 生成元素信息
     * @param {Object} element - 元素数据
     * @returns {string} HTML字符串
     */
    generateElementInfo(element) {
        const { name, protons, neutrons, electrons, config } = element;

        return `
            <h4>${name}元素信息</h4>
            <div class="element-details">
                <p><strong>原子序数：</strong>${protons}</p>
                <p><strong>质量数：</strong>${protons + neutrons}</p>
                <p><strong>电子数：</strong>${electrons}</p>
                <p><strong>电子排布：</strong>${config}</p>
            </div>
        `;
    },

    /**
     * 创建简化周期表
     */
    createSimplePeriodicTable() {
        const preview = document.getElementById('pt-preview');
        const elements = [
            'H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He',
            'Li', 'Be', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne',
            'Na', 'Mg', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'
        ];

        let tableHTML = '<div class="simple-periodic-table">';

        elements.forEach((element, index) => {
            if (element) {
                const category = this.elementsData[element]?.category || 'transition-metal';
                tableHTML += `<div class="pt-element ${category}" title="${element}">${element}</div>`;
            } else {
                tableHTML += '<div class="pt-empty"></div>';
            }
        });

        tableHTML += '</div>';
        preview.innerHTML = tableHTML;
    },

    /**
     * 创建元素性质对比表格
     */
    createComparisonTable() {
        const tableBody = document.getElementById('comparison-table-body');
        
        // 使用共享常量
        const electronegativityData = Constants.ELECTRONEGATIVITY_DATA;
        const categoryNames = Constants.ELEMENT_CATEGORIES;

        let tableHTML = '';

        // 选择代表性元素进行对比
        const selectedElements = [
            'H', 'Li', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 
            'P', 'S', 'Cl', 'K', 'Ca', 'Sc', 'Ti', 'Cr', 'Fe', 'Cu', 
            'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'
        ];

        selectedElements.forEach(symbol => {
            const element = this.elementsData[symbol];
            if (element) {
                const electronegativity = electronegativityData[symbol];
                const categoryName = categoryNames[element.category] || element.category;
                
                tableHTML += `
                    <tr>
                        <td><strong>${symbol}</strong> (${element.name})</td>
                        <td>${element.protons}</td>
                        <td>${element.atomicMass}</td>
                        <td>${element.config}</td>
                        <td>${categoryName}</td>
                        <td>${electronegativity ? electronegativity.toFixed(2) : '-'}</td>
                    </tr>
                `;
            }
        });

        tableBody.innerHTML = tableHTML;
    },

    /**
     * 获取元素详细信息
     * @param {string} elementSymbol - 元素符号
     * @returns {Object} 元素详细信息
     */
    getElementDetails(elementSymbol) {
        const element = this.elementsData[elementSymbol];
        if (!element) return null;

        const electronegativity = Constants.ELECTRONEGATIVITY_DATA[elementSymbol];
        
        return {
            ...element,
            electronegativity,
            categoryName: Constants.ELEMENT_CATEGORIES[element.category] || element.category,
            massNumber: element.protons + element.neutrons
        };
    },

    /**
     * 根据原子序数获取元素
     * @param {number} atomicNumber - 原子序数
     * @returns {Object} 元素数据
     */
    getElementByAtomicNumber(atomicNumber) {
        for (const symbol in this.elementsData) {
            if (this.elementsData[symbol].protons === atomicNumber) {
                return this.elementsData[symbol];
            }
        }
        return null;
    },

    /**
     * 获取元素列表
     * @param {string} category - 元素类别（可选）
     * @returns {Array} 元素列表
     */
    getElements(category = null) {
        if (!category) {
            return Object.values(this.elementsData);
        }
        
        return Object.values(this.elementsData).filter(element => 
            element.category === category
        );
    },

    /**
     * 计算电子层分布
     * @param {number} electronCount - 电子数量
     * @returns {Array} 电子层分布数组
     */
    calculateElectronDistribution(electronCount) {
        const distribution = [];
        let remainingElectrons = electronCount;
        
        Constants.SHELL_CAPACITY.forEach((capacity, index) => {
            if (remainingElectrons <= 0) return;
            
            const electronsInShell = Math.min(capacity, remainingElectrons);
            distribution.push({
                shell: Constants.SHELL_NAMES[index],
                capacity: capacity,
                electrons: electronsInShell
            });
            
            remainingElectrons -= electronsInShell;
        });
        
        return distribution;
    },

    /**
     * 清理模块资源
     */
    cleanup() {
        // 清理事件监听器等资源
        const elementSelect = document.getElementById('element-select');
        if (elementSelect) {
            elementSelect.onchange = null;
        }
        
        console.log('原子世界模块清理完成');
    }
};

// 模块加载完成后自动初始化
// 注意：在模块化版本中，模块是在动态加载后初始化的
// 这个事件监听器在模块化版本中不会触发，因为模块是在DOM加载完成后才动态加载的
// 模块初始化由core.js中的ModuleManager负责

// 全局导出
window.AtomicWorld = AtomicWorld;

// 兼容旧代码的全局函数
window.updateAtomModel = function(elementSymbol) {
    AtomicWorld.updateAtomModel(elementSymbol);
};
