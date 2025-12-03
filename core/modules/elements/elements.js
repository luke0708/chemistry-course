// 元素王国模块功能

const ElementsKingdom = {
    // 初始化函数
    async init() {
        try {
            console.log('元素王国模块初始化...');
            
            // 初始化标签页
            this.initTabs();
            
            // 初始化同分异构体游戏
            this.initIsomerGame();
            
            // 初始化官能团卡片交互
            this.initFunctionalGroups();
            
            console.log('元素王国模块初始化完成');
        } catch (error) {
            console.error('元素王国模块初始化失败:', error);
            Utils.showMessage('元素王国模块加载失败', 'error');
        }
    },

    // 初始化标签页
    initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // 移除所有按钮的active类
                tabBtns.forEach(b => b.classList.remove('active'));
                // 隐藏所有内容
                tabContents.forEach(content => content.classList.remove('active'));
                
                // 激活当前按钮
                btn.classList.add('active');
                // 显示对应内容
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    },

    // 初始化同分异构体游戏
    initIsomerGame() {
        const carbonAtoms = document.querySelectorAll('.atom.carbon');
        const hydrogenAtoms = document.querySelectorAll('.atom.hydrogen');
        const buildArea = document.getElementById('build-area');
        const checkBtn = document.getElementById('check-isomer');
        const resultDiv = document.getElementById('isomer-result');
        
        if (!buildArea) return;

        // 为碳原子和氢原子添加拖动事件
        [...carbonAtoms, ...hydrogenAtoms].forEach(atom => {
            atom.addEventListener('dragstart', (e) => {
                const atomType = atom.classList.contains('carbon') ? 'C' : 'H';
                e.dataTransfer.setData('text/plain', atomType);
                e.dataTransfer.setData('atom/html', atom.outerHTML);
                e.dataTransfer.setData('atom/type', atomType);
                atom.style.opacity = '0.5';
            });
            
            atom.addEventListener('dragend', () => {
                atom.style.opacity = '1';
            });
        });

        // 构建区域拖动事件
        buildArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            buildArea.classList.add('drag-over');
        });

        buildArea.addEventListener('dragleave', () => {
            buildArea.classList.remove('drag-over');
        });

        buildArea.addEventListener('drop', (e) => {
            e.preventDefault();
            buildArea.classList.remove('drag-over');
            
            const atomType = e.dataTransfer.getData('text/plain');
            const atomHTML = e.dataTransfer.getData('atom/html');
            if (!atomType || !atomHTML) return;
            
            // 创建新的原子元素
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = atomHTML;
            const newAtom = tempDiv.firstChild;
            
            newAtom.style.position = 'absolute';
            // 计算相对于buildArea的位置
            const rect = buildArea.getBoundingClientRect();
            const x = e.clientX - rect.left - 30;
            const y = e.clientY - rect.top - 30;
            newAtom.style.left = `${x}px`;
            newAtom.style.top = `${y}px`;
            newAtom.style.opacity = '1';
            newAtom.draggable = true;
            
            // 为新原子添加拖动事件
            newAtom.addEventListener('dragstart', (event) => {
                const thisAtomType = newAtom.classList.contains('carbon') ? 'C' : 'H';
                event.dataTransfer.setData('text/plain', thisAtomType);
                event.dataTransfer.setData('atom/html', newAtom.outerHTML);
                event.dataTransfer.setData('atom/type', thisAtomType);
                newAtom.style.opacity = '0.5';
            });
            
            newAtom.addEventListener('dragend', () => {
                newAtom.style.opacity = '1';
            });
            
            buildArea.appendChild(newAtom);
            
            // 阻止事件冒泡，避免干扰其他事件
            e.stopPropagation();
        });

        // 检查按钮点击事件
        if (checkBtn) {
            checkBtn.addEventListener('click', () => {
                this.checkIsomerStructure(buildArea, resultDiv);
            });
        }
    },

    // 检查同分异构体结构
    checkIsomerStructure(buildArea, resultDiv) {
        const atoms = buildArea.querySelectorAll('.atom');
        const carbonCount = Array.from(atoms).filter(a => a.classList.contains('carbon')).length;
        const hydrogenCount = Array.from(atoms).filter(a => a.classList.contains('hydrogen')).length;
        
        // 验证分子式是否为 C4H10
        if (carbonCount === 4 && hydrogenCount === 10) {
            // 检查是否有连接（这里简化检查，实际应该检查连接关系）
            const carbonAtoms = Array.from(atoms).filter(a => a.classList.contains('carbon'));
            const hasConnections = this.checkCarbonConnections(carbonAtoms);
            
            if (hasConnections) {
                resultDiv.innerHTML = `
                    <div class="success">
                        <h4>✅ 结构正确！</h4>
                        <p>你成功构建了C₄H₁₀的同分异构体</p>
                        <p>碳原子数：${carbonCount}，氢原子数：${hydrogenCount}</p>
                    </div>
                `;
                resultDiv.className = 'result success';
            } else {
                resultDiv.innerHTML = `
                    <div class="error">
                        <h4>⚠️ 需要连接原子</h4>
                        <p>原子之间需要形成化学键连接</p>
                        <p>尝试将原子靠近以形成连接</p>
                    </div>
                `;
                resultDiv.className = 'result error';
            }
        } else {
            resultDiv.innerHTML = `
                <div class="error">
                    <h4>❌ 分子式不正确</h4>
                    <p>目标分子式：C₄H₁₀</p>
                    <p>当前分子式：C${carbonCount}H${hydrogenCount}</p>
                    <p>请调整原子数量</p>
                </div>
            `;
            resultDiv.className = 'result error';
        }
    },

    // 检查碳原子连接（简化版本）
    checkCarbonConnections(carbonAtoms) {
        // 简化检查：至少有两个碳原子比较接近
        if (carbonAtoms.length < 2) return false;
        
        for (let i = 0; i < carbonAtoms.length; i++) {
            for (let j = i + 1; j < carbonAtoms.length; j++) {
                const rect1 = carbonAtoms[i].getBoundingClientRect();
                const rect2 = carbonAtoms[j].getBoundingClientRect();
                
                const distance = Math.sqrt(
                    Math.pow(rect1.left - rect2.left, 2) + 
                    Math.pow(rect1.top - rect2.top, 2)
                );
                
                // 如果两个碳原子距离小于80px，认为有连接
                if (distance < 80) {
                    return true;
                }
            }
        }
        return false;
    },

    // 初始化官能团卡片交互
    initFunctionalGroups() {
        const funcGroupCards = document.querySelectorAll('.func-group-card');
        
        funcGroupCards.forEach(card => {
            card.addEventListener('click', () => {
                const group = card.getAttribute('data-group');
                this.showFunctionalGroupInfo(group);
            });
        });
    },

    // 显示官能团详细信息
    showFunctionalGroupInfo(group) {
        const groupInfo = {
            alkene: {
                name: '烯烃 (碳碳双键)',
                formula: 'C=C',
                properties: [
                    '不饱和烃，含有一个或多个碳碳双键',
                    '易发生加成反应',
                    '可发生聚合反应生成高分子',
                    '典型代表：乙烯(CH₂=CH₂)'
                ],
                examples: [
                    'CH₂=CH₂ + Br₂ → CH₂BrCH₂Br (加成反应)',
                    'nCH₂=CH₂ → [-CH₂-CH₂-]n (聚合反应)'
                ]
            },
            alcohol: {
                name: '醇 (羟基)',
                formula: '-OH',
                properties: [
                    '含有羟基(-OH)的有机化合物',
                    '可与活泼金属反应生成氢气',
                    '可发生酯化反应',
                    '可被氧化成醛或酮',
                    '典型代表：乙醇(CH₃CH₂OH)'
                ],
                examples: [
                    '2CH₃CH₂OH + 2Na → 2CH₃CH₂ONa + H₂↑',
                    'CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O (酯化)'
                ]
            },
            aldehyde: {
                name: '醛 (醛基)',
                formula: '-CHO',
                properties: [
                    '含有醛基(-CHO)的有机化合物',
                    '具有还原性，可被氧化成羧酸',
                    '可与银氨溶液发生银镜反应',
                    '可与新制氢氧化铜反应生成红色沉淀',
                    '典型代表：甲醛(HCHO)、乙醛(CH₃CHO)'
                ],
                examples: [
                    'CH₃CHO + 2[Ag(NH₃)₂]⁺ + 2OH⁻ → CH₃COO⁻ + 2Ag↓ + 3NH₃ + H₂O',
                    'CH₃CHO + 2Cu(OH)₂ → CH₃COOH + Cu₂O↓ + 2H₂O'
                ]
            },
            carboxylic: {
                name: '羧酸 (羧基)',
                formula: '-COOH',
                properties: [
                    '含有羧基(-COOH)的有机化合物',
                    '具有酸性，可与碱反应',
                    '可与醇发生酯化反应',
                    '典型代表：乙酸(CH₃COOH)',
                    '高级羧酸：硬脂酸(C₁₇H₃₅COOH)'
                ],
                examples: [
                    'CH₃COOH + NaOH → CH₃COONa + H₂O',
                    'CH₃COOH + CH₃CH₂OH → CH₃COOCH₂CH₃ + H₂O'
                ]
            }
        };
        
        const info = groupInfo[group];
        if (!info) return;
        
        // 创建信息弹窗
        const modal = this.createModal(`
            <h3>${info.name}</h3>
            <div class="formula-display">${info.formula}</div>
            
            <div class="properties-list">
                <h4>主要性质：</h4>
                <ul>
                    ${info.properties.map(prop => `<li>${prop}</li>`).join('')}
                </ul>
            </div>
            
            <div class="examples-list">
                <h4>典型反应：</h4>
                <div class="reaction-examples">
                    ${info.examples.map(example => `
                        <div class="reaction-example">
                            ${example}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <button class="btn close-modal">关闭</button>
        `);
        
        // 添加关闭事件
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    },

    // 创建模态框
    createModal(content) {
        const modal = document.createElement('div');
        modal.className = 'functional-group-modal';
        modal.innerHTML = `
            <div class="modal-content">
                ${content}
            </div>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .functional-group-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .functional-group-modal .modal-content {
                background: white;
                padding: 30px;
                border-radius: 15px;
                max-width: 500px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: slideUp 0.3s ease;
            }
            
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .functional-group-modal h3 {
                color: #343a40;
                margin-bottom: 15px;
                text-align: center;
            }
            
            .functional-group-modal .formula-display {
                font-size: 2rem;
                text-align: center;
                color: #667eea;
                font-weight: bold;
                font-family: 'Courier New', monospace;
                margin: 20px 0;
                padding: 10px;
                background: #f8f9fa;
                border-radius: 8px;
            }
            
            .functional-group-modal .properties-list h4,
            .functional-group-modal .examples-list h4 {
                color: #495057;
                margin: 20px 0 10px 0;
                font-size: 1.2rem;
            }
            
            .functional-group-modal .properties-list ul {
                list-style-type: none;
                padding-left: 20px;
            }
            
            .functional-group-modal .properties-list li {
                padding: 8px 0;
                border-bottom: 1px dashed #dee2e6;
                position: relative;
                padding-left: 25px;
            }
            
            .functional-group-modal .properties-list li:before {
                content: '•';
                position: absolute;
                left: 0;
                color: #667eea;
                font-size: 1.5rem;
            }
            
            .functional-group-modal .reaction-examples {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .functional-group-modal .reaction-example {
                background: #f8f9fa;
                padding: 12px;
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                color: #495057;
                text-align: center;
                border: 1px solid #dee2e6;
                font-size: 0.9rem;
            }
            
            .functional-group-modal .btn.close-modal {
                display: block;
                margin: 25px auto 0 auto;
                padding: 10px 30px;
                background: #667eea;
                color: white;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            
            .functional-group-modal .btn.close-modal:hover {
                background: #5a67d8;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(modal);
        
        return modal;
    },

    // 获取金属元素信息
    getMetalElements(category) {
        const metals = {
            alkali: ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'],
            alkalineEarth: ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'],
            transition: ['Fe', 'Cu', 'Zn', 'Ag', 'Au', 'Pt', 'Cr', 'Mn', 'Co', 'Ni']
        };
        
        return metals[category] || [];
    },

    // 获取非金属元素信息
    getNonmetalElements(category) {
        const nonmetals = {
            halogens: ['F', 'Cl', 'Br', 'I', 'At'],
            oxygenGroup: ['O', 'S', 'Se', 'Te', 'Po'],
            nitrogenGroup: ['N', 'P', 'As', 'Sb', 'Bi']
        };
        
        return nonmetals[category] || [];
    },

    // 清理模块资源
    cleanup() {
        console.log('元素王国模块清理完成');
    }
};

// 全局导出
window.ElementsKingdom = ElementsKingdom;

// 模块加载完成后自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof ElementsKingdom !== 'undefined' && ElementsKingdom.init) {
            ElementsKingdom.init();
        }
    });
} else {
    // 如果DOM已经加载完成，直接初始化
    if (typeof ElementsKingdom !== 'undefined' && ElementsKingdom.init) {
        ElementsKingdom.init();
    }
}
