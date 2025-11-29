// 化学键模块功能

const ChemicalBonds = {
    currentAnimation: null,
    
    /**
     * 初始化化学键模块
     */
    async init() {
        try {
            // 初始化默认显示
            this.showBondAnimation('ionic');
            this.showCovalentBond('h2');
            this.showMolecularGeometry('linear');
            this.showIntermolecularForces('vdw');
            
            console.log('化学键模块初始化完成');
        } catch (error) {
            console.error('化学键模块初始化失败:', error);
            Utils.showMessage('化学键模块加载失败', 'error');
        }
    },

    /**
     * 显示化学键动画
     * @param {string} bondType - 键类型
     */
    showBondAnimation(bondType) {
        const animation = document.getElementById('bond-animation');
        const info = document.getElementById('bond-info');

        let animationHTML = '';
        let infoHTML = '';

        switch (bondType) {
            case 'ionic':
                animationHTML = this.generateIonicBondAnimation();
                infoHTML = this.generateIonicBondInfo();
                break;
            case 'covalent':
                animationHTML = this.generateCovalentBondAnimation();
                infoHTML = this.generateCovalentBondInfo();
                break;
            case 'metallic':
                animationHTML = this.generateMetallicBondAnimation();
                infoHTML = this.generateMetallicBondInfo();
                break;
        }

        animation.innerHTML = animationHTML;
        info.innerHTML = infoHTML;
    },

    /**
     * 生成离子键动画
     * @returns {string} HTML字符串
     */
    generateIonicBondAnimation() {
        return `
            <div class="bond-visualization">
                <div class="atom-pair">
                    <div class="atom na-atom">Na</div>
                    <div class="electron-transfer">+ e⁻ →</div>
                    <div class="atom cl-atom">Cl</div>
                </div>
                <div class="ion-pair">
                    <div class="ion na-ion">Na⁺</div>
                    <div class="bond-line">+</div>
                    <div class="ion cl-ion">Cl⁻</div>
                </div>
                <div class="ionic-compound">NaCl</div>
            </div>
        `;
    },

    /**
     * 生成离子键信息
     * @returns {string} HTML字符串
     */
    generateIonicBondInfo() {
        return `
            <h4>离子键特性</h4>
            <ul>
                <li>金属与非金属原子间电子转移</li>
                <li>形成带正负电荷的离子</li>
                <li>通过静电作用结合</li>
                <li>高熔点、易溶于水</li>
            </ul>
        `;
    },

    /**
     * 生成共价键动画
     * @returns {string} HTML字符串
     */
    generateCovalentBondAnimation() {
        return `
            <div class="bond-visualization">
                <div class="molecule-model">
                    <div class="atom hydrogen">H</div>
                    <div class="bond single-bond">共价键</div>
                    <div class="atom hydrogen">H</div>
                </div>
                <div class="electron-cloud">
                    <div class="cloud-label">电子云重叠</div>
                </div>
                <div class="molecule-info">
                    H₂分子 - 共用电子对
                </div>
            </div>
        `;
    },

    /**
     * 生成共价键信息
     * @returns {string} HTML字符串
     */
    generateCovalentBondInfo() {
        return `
            <h4>共价键特性</h4>
            <ul>
                <li>非金属原子间电子共用</li>
                <li>形成稳定的电子构型</li>
                <li>可以是单键、双键或三键</li>
                <li>形成分子化合物</li>
            </ul>
        `;
    },

    /**
     * 生成金属键动画
     * @returns {string} HTML字符串
     */
    generateMetallicBondAnimation() {
        return `
            <div class="bond-visualization">
                <div class="molecule-model">
                    <div class="atom" style="background: linear-gradient(135deg, #ff9800, #f57c00);">Cu</div>
                    <div class="electron-dot-app"></div>
                    <div class="atom" style="background: linear-gradient(135deg, #ff9800, #f57c00);">Cu</div>
                    <div class="electron-dot-app"></div>
                    <div class="atom" style="background: linear-gradient(135deg, #ff9800, #f57c00);">Cu</div>
                </div>
                <div class="molecule-info">
                    金属晶格 - 电子海模型
                </div>
            </div>
        `;
    },

    /**
     * 生成金属键信息
     * @returns {string} HTML字符串
     */
    generateMetallicBondInfo() {
        return `
            <h4>金属键特性</h4>
            <ul>
                <li>金属原子释放价电子</li>
                <li>正离子沉浸在电子海中</li>
                <li>赋予金属导电性</li>
                <li>赋予金属延展性</li>
            </ul>
        `;
    },

    /**
     * 显示共价键可视化
     * @param {string} molecule - 分子类型
     */
    showCovalentBond(molecule) {
        const visualization = document.getElementById('covalent-visualization');
        visualization.innerHTML = this.generateCovalentVisualization(molecule);
    },

    /**
     * 生成共价键可视化
     * @param {string} molecule - 分子类型
     * @returns {string} HTML字符串
     */
    generateCovalentVisualization(molecule) {
        switch (molecule) {
            case 'h2':
                return `
                    <div class="molecule-model">
                        <div class="atom hydrogen">H</div>
                        <div class="bond single-bond">─</div>
                        <div class="atom hydrogen">H</div>
                    </div>
                    <div class="molecule-info">
                        H₂ - 氢气分子<br>
                        非极性共价键
                    </div>
                `;
            case 'h2o':
                return `
                    <div class="molecule-model">
                        <div class="atom hydrogen">H</div>
                        <div class="bond single-bond">─</div>
                        <div class="atom oxygen">O</div>
                        <div class="bond single-bond">─</div>
                        <div class="atom hydrogen">H</div>
                    </div>
                    <div class="molecule-info">
                        H₂O - 水分子<br>
                        V形结构，极性分子
                    </div>
                `;
            case 'co2':
                return `
                    <div class="molecule-model">
                        <div class="atom oxygen">O</div>
                        <div class="bond double-bond">═</div>
                        <div class="atom carbon">C</div>
                        <div class="bond double-bond">═</div>
                        <div class="atom oxygen">O</div>
                    </div>
                    <div class="molecule-info">
                        CO₂ - 二氧化碳<br>
                        直线形结构，非极性分子
                    </div>
                `;
            case 'nh3':
                return `
                    <div class="molecule-model">
                        <div class="atom hydrogen">H</div>
                        <div class="bond single-bond">─</div>
                        <div class="atom nitrogen">N</div>
                        <div class="bond single-bond">─</div>
                        <div class="atom hydrogen">H</div>
                        <div class="bond single-bond">─</div>
                        <div class="atom hydrogen">H</div>
                    </div>
                    <div class="molecule-info">
                        NH₃ - 氨分子<br>
                        三角锥形结构，极性分子
                    </div>
                `;
        }
    },

    /**
     * 显示分子几何构型
     * @param {string} geometry - 几何构型
     */
    showMolecularGeometry(geometry) {
        const visualization = document.getElementById('geometry-visualization');
        visualization.innerHTML = this.generateGeometryVisualization(geometry);
    },

    /**
     * 生成几何构型可视化
     * @param {string} geometry - 几何构型
     * @returns {string} HTML字符串
     */
    generateGeometryVisualization(geometry) {
        switch (geometry) {
            case 'linear':
                return `
                    <div class="geometry-model">
                        <div class="central-atom">C</div>
                        <div class="bond-line horizontal" style="left: 70px;"></div>
                        <div class="bond-line horizontal" style="left: 70px; transform: rotate(180deg);"></div>
                    </div>
                    <div class="geometry-info">
                        直线形<br>
                        键角：180°<br>
                        示例：CO₂
                    </div>
                `;
            case 'bent':
                return `
                    <div class="geometry-model">
                        <div class="central-atom">O</div>
                        <div class="bond-line angled" style="transform: rotate(45deg);"></div>
                        <div class="bond-line angled" style="transform: rotate(-45deg);"></div>
                        <div class="lone-pairs">
                            <div class="lone-pair">孤对电子</div>
                            <div class="lone-pair">孤对电子</div>
                        </div>
                    </div>
                    <div class="geometry-info">
                        V形<br>
                        键角：104.5°<br>
                        示例：H₂O
                    </div>
                `;
            case 'trigonal':
                return `
                    <div class="geometry-model">
                        <div class="central-atom">N</div>
                        <div class="bond-line pyramid" style="transform: rotate(45deg);"></div>
                        <div class="bond-line pyramid" style="transform: rotate(135deg);"></div>
                        <div class="bond-line pyramid" style="transform: rotate(225deg);"></div>
                        <div class="lone-pairs">
                            <div class="lone-pair">孤对电子</div>
                        </div>
                    </div>
                    <div class="geometry-info">
                        三角锥形<br>
                        键角：107°<br>
                        示例：NH₃
                    </div>
                `;
            case 'tetrahedral':
                return `
                    <div class="geometry-model">
                        <div class="central-atom">C</div>
                        <div class="bond-line tetra" style="transform: rotate(54.7deg);"></div>
                        <div class="bond-line tetra" style="transform: rotate(125.3deg);"></div>
                        <div class="bond-line tetra" style="transform: rotate(234.7deg);"></div>
                        <div class="bond-line tetra" style="transform: rotate(305.3deg);"></div>
                    </div>
                    <div class="geometry-info">
                        四面体形<br>
                        键角：109.5°<br>
                        示例：CH₄
                    </div>
                `;
        }
    },

    /**
     * 显示分子间作用力
     * @param {string} forceType - 作用力类型
     */
    showIntermolecularForces(forceType) {
        const visualization = document.getElementById('forces-visualization');
        const description = document.getElementById('force-description');

        visualization.innerHTML = this.generateForceVisualization(forceType);
        description.textContent = this.getForceDescription(forceType);
    },

    /**
     * 生成作用力可视化
     * @param {string} forceType - 作用力类型
     * @returns {string} HTML字符串
     */
    generateForceVisualization(forceType) {
        switch (forceType) {
            case 'vdw':
                return `
                    <div class="force-model">
                        <div class="molecule nonpolar">CH₄</div>
                        <div class="force-lines">
                            <div class="force-line">范德华力</div>
                            <div class="force-line">色散力</div>
                        </div>
                        <div class="molecule nonpolar">CH₄</div>
                    </div>
                `;
            case 'hydrogen':
                return `
                    <div class="force-model">
                        <div class="molecule water">H₂O</div>
                        <div class="force-lines">
                            <div class="hydrogen-bond">氢键</div>
                            <div class="hydrogen-bond">氢键</div>
                        </div>
                        <div class="molecule water">H₂O</div>
                    </div>
                `;
            case 'dipole':
                return `
                    <div class="force-model">
                        <div class="molecule polar">HCl</div>
                        <div class="force-lines">
                            <div class="dipole-interaction">偶极-偶极作用</div>
                        </div>
                        <div class="molecule polar">HCl</div>
                    </div>
                `;
        }
    },

    /**
     * 获取作用力描述
     * @param {string} forceType - 作用力类型
     * @returns {string} 描述文本
     */
    getForceDescription(forceType) {
        const descriptions = {
            'vdw': '范德华力是所有分子间都存在的作用力，包括取向力、诱导力和色散力。色散力是最主要的范德华力。',
            'hydrogen': '氢键是特殊的分子间作用力，存在于H与N、O、F之间，比范德华力强，影响物质物理性质。',
            'dipole': '偶极-偶极作用是极性分子间的相互作用，分子正负电荷中心不重合，产生永久偶极。'
        };
        return descriptions[forceType] || '选择作用力类型查看详细说明';
    },

    /**
     * 计算键能
     */
    calculateBondEnergy() {
        const bondType = document.getElementById('bond-type').value;
        const bondCount = parseInt(document.getElementById('bond-count').value) || 1;
        
        // 使用共享常量
        const bondEnergies = Constants.BOND_ENERGIES;
        const energy = bondEnergies[bondType];
        
        if (energy) {
            const totalEnergy = energy * bondCount;
            const result = document.getElementById('energy-result');
            
            result.innerHTML = `
                <h5>计算结果</h5>
                <p><strong>化学键类型：</strong>${bondType}</p>
                <p><strong>键能：</strong>${energy} kJ/mol</p>
                <p><strong>化学键数量：</strong>${bondCount}</p>
                <p><strong>总能量：</strong>${totalEnergy} kJ</p>
                <div class="energy-note">
                    注：键能表示破坏1mol化学键所需的能量
                </div>
            `;
        } else {
            Utils.showMessage('未找到该化学键的键能数据', 'error');
        }
    },

    /**
     * 运行分子极性实验
     * @param {string} molecule - 分子类型
     */
    runPolarityExperiment(molecule) {
        const container = document.getElementById('molecule-container');
        const result = document.getElementById('experiment-result');
        
        // 使用共享常量
        const polarityData = Constants.MOLECULE_POLARITY[molecule];
        
        if (polarityData) {
            const moleculeClass = polarityData.polar ? 'polar' : 'nonpolar';
            
            container.innerHTML = `
                <div class="molecule ${moleculeClass}">${polarityData.name}</div>
            `;
            
            result.innerHTML = `
                <div class="experiment-analysis">
                    <h5>实验结果分析</h5>
                    <p><strong>分子：</strong>${polarityData.name}</p>
                    <p><strong>极性：</strong>${polarityData.polar ? '极性分子' : '非极性分子'}</p>
                    <p><strong>原因：</strong>${polarityData.reason}</p>
                    <p><strong>电场中表现：</strong>${polarityData.polar ? '发生偏转' : '不发生偏转'}</p>
                </div>
            `;
        }
    },

    /**
     * 开始离子键动画
     */
    startIonicAnimation() {
        const animation = document.getElementById('ionic-animation');
        
        animation.innerHTML = `
            <div class="ionic-animation">
                <div class="step">
                    <div class="atom na-atom">Na</div>
                    <div class="electron-transfer">
                        <div class="electron">e⁻</div>
                        <div class="arrow">→</div>
                    </div>
                    <div class="atom cl-atom">Cl</div>
                </div>
                <div class="step">
                    <div class="ion na-ion">Na⁺</div>
                    <div class="bond-line">+</div>
                    <div class="ion cl-ion">Cl⁻</div>
                </div>
                <div class="step">
                    <div class="crystal">NaCl 晶体</div>
                </div>
            </div>
        `;
    },

    /**
     * 重置离子键动画
     */
    resetIonicAnimation() {
        const animation = document.getElementById('ionic-animation');
        animation.innerHTML = '<p>点击"开始动画"查看离子键形成过程</p>';
    },

    /**
     * 清理模块资源
     */
    cleanup() {
        // 清理事件监听器等资源
        const controls = [
            'bond-type-select', 'molecule-select', 'geometry-select',
            'force-type-select', 'molecule-experiment'
        ];
        
        controls.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.onchange = null;
            }
        });
        
        console.log('化学键模块清理完成');
    }
};

// 模块加载完成后自动初始化
document.addEventListener('DOMContentLoaded', function() {
    // 等待共享工具加载完成
    if (window.Utils && window.Constants) {
        ChemicalBonds.init();
    } else {
        // 如果共享工具尚未加载，等待一下
        setTimeout(() => {
            if (window.Utils && window.Constants) {
                ChemicalBonds.init();
            } else {
                console.error('共享工具未正确加载');
            }
        }, 100);
    }
});

// 全局导出
window.ChemicalBonds = ChemicalBonds;

// 兼容旧代码的全局函数
window.showBondAnimation = function(bondType) {
    ChemicalBonds.showBondAnimation(bondType);
};

window.showCovalentBond = function(molecule) {
    ChemicalBonds.showCovalentBond(molecule);
};

window.showMolecularGeometry = function(geometry) {
    ChemicalBonds.showMolecularGeometry(geometry);
};

window.showIntermolecularForces = function(forceType) {
    ChemicalBonds.showIntermolecularForces(forceType);
};

window.calculateBondEnergy = function() {
    ChemicalBonds.calculateBondEnergy();
};

window.runPolarityExperiment = function(molecule) {
    ChemicalBonds.runPolarityExperiment(molecule);
};

window.startIonicAnimation = function() {
    ChemicalBonds.startIonicAnimation();
};

window.resetIonicAnimation = function() {
    ChemicalBonds.resetIonicAnimation();
};
