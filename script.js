// 元素数据 - 前36个元素（H到Kr）
const elementsData = {
    'H': { name: '氢', protons: 1, neutrons: 0, electrons: 1, config: '1s¹', category: 'non-metal', atomicMass: 1.008 },
    'He': { name: '氦', protons: 2, neutrons: 2, electrons: 2, config: '1s²', category: 'noble-gas', atomicMass: 4.003 },
    'Li': { name: '锂', protons: 3, neutrons: 4, electrons: 3, config: '1s² 2s¹', category: 'alkali-metal', atomicMass: 6.941 },
    'Be': { name: '铍', protons: 4, neutrons: 5, electrons: 4, config: '1s² 2s²', category: 'alkaline-earth', atomicMass: 9.012 },
    'B': { name: '硼', protons: 5, neutrons: 6, electrons: 5, config: '1s² 2s² 2p¹', category: 'semi-metal', atomicMass: 10.81 },
    'C': { name: '碳', protons: 6, neutrons: 6, electrons: 6, config: '1s² 2s² 2p²', category: 'non-metal', atomicMass: 12.01 },
    'N': { name: '氮', protons: 7, neutrons: 7, electrons: 7, config: '1s² 2s² 2p³', category: 'non-metal', atomicMass: 14.01 },
    'O': { name: '氧', protons: 8, neutrons: 8, electrons: 8, config: '1s² 2s² 2p⁴', category: 'non-metal', atomicMass: 16.00 },
    'F': { name: '氟', protons: 9, neutrons: 10, electrons: 9, config: '1s² 2s² 2p⁵', category: 'halogen', atomicMass: 19.00 },
    'Ne': { name: '氖', protons: 10, neutrons: 10, electrons: 10, config: '1s² 2s² 2p⁶', category: 'noble-gas', atomicMass: 20.18 },
    'Na': { name: '钠', protons: 11, neutrons: 12, electrons: 11, config: '1s² 2s² 2p⁶ 3s¹', category: 'alkali-metal', atomicMass: 22.99 },
    'Mg': { name: '镁', protons: 12, neutrons: 12, electrons: 12, config: '1s² 2s² 2p⁶ 3s²', category: 'alkaline-earth', atomicMass: 24.31 },
    'Al': { name: '铝', protons: 13, neutrons: 14, electrons: 13, config: '1s² 2s² 2p⁶ 3s² 3p¹', category: 'basic-metal', atomicMass: 26.98 },
    'Si': { name: '硅', protons: 14, neutrons: 14, electrons: 14, config: '1s² 2s² 2p⁶ 3s² 3p²', category: 'semi-metal', atomicMass: 28.09 },
    'P': { name: '磷', protons: 15, neutrons: 16, electrons: 15, config: '1s² 2s² 2p⁶ 3s² 3p³', category: 'non-metal', atomicMass: 30.97 },
    'S': { name: '硫', protons: 16, neutrons: 16, electrons: 16, config: '1s² 2s² 2p⁶ 3s² 3p⁴', category: 'non-metal', atomicMass: 32.07 },
    'Cl': { name: '氯', protons: 17, neutrons: 18, electrons: 17, config: '1s² 2s² 2p⁶ 3s² 3p⁵', category: 'halogen', atomicMass: 35.45 },
    'Ar': { name: '氩', protons: 18, neutrons: 22, electrons: 18, config: '1s² 2s² 2p⁶ 3s² 3p⁶', category: 'noble-gas', atomicMass: 39.95 },
    'K': { name: '钾', protons: 19, neutrons: 20, electrons: 19, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹', category: 'alkali-metal', atomicMass: 39.10 },
    'Ca': { name: '钙', protons: 20, neutrons: 20, electrons: 20, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s²', category: 'alkaline-earth', atomicMass: 40.08 },
    'Sc': { name: '钪', protons: 21, neutrons: 24, electrons: 21, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s²', category: 'transition-metal', atomicMass: 44.96 },
    'Ti': { name: '钛', protons: 22, neutrons: 26, electrons: 22, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²', category: 'transition-metal', atomicMass: 47.87 },
    'V': { name: '钒', protons: 23, neutrons: 28, electrons: 23, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d³ 4s²', category: 'transition-metal', atomicMass: 50.94 },
    'Cr': { name: '铬', protons: 24, neutrons: 28, electrons: 24, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹', category: 'transition-metal', atomicMass: 52.00 },
    'Mn': { name: '锰', protons: 25, neutrons: 30, electrons: 25, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s²', category: 'transition-metal', atomicMass: 54.94 },
    'Fe': { name: '铁', protons: 26, neutrons: 30, electrons: 26, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²', category: 'transition-metal', atomicMass: 55.85 },
    'Co': { name: '钴', protons: 27, neutrons: 32, electrons: 27, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁷ 4s²', category: 'transition-metal', atomicMass: 58.93 },
    'Ni': { name: '镍', protons: 28, neutrons: 31, electrons: 28, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸ 4s²', category: 'transition-metal', atomicMass: 58.69 },
    'Cu': { name: '铜', protons: 29, neutrons: 35, electrons: 29, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹', category: 'transition-metal', atomicMass: 63.55 },
    'Zn': { name: '锌', protons: 30, neutrons: 35, electrons: 30, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²', category: 'transition-metal', atomicMass: 65.38 },
    'Ga': { name: '镓', protons: 31, neutrons: 39, electrons: 31, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p¹', category: 'basic-metal', atomicMass: 69.72 },
    'Ge': { name: '锗', protons: 32, neutrons: 41, electrons: 32, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p²', category: 'semi-metal', atomicMass: 72.63 },
    'As': { name: '砷', protons: 33, neutrons: 42, electrons: 33, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p³', category: 'semi-metal', atomicMass: 74.92 },
    'Se': { name: '硒', protons: 34, neutrons: 45, electrons: 34, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁴', category: 'non-metal', atomicMass: 78.96 },
    'Br': { name: '溴', protons: 35, neutrons: 45, electrons: 35, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁵', category: 'halogen', atomicMass: 79.90 },
    'Kr': { name: '氪', protons: 36, neutrons: 48, electrons: 36, config: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶', category: 'noble-gas', atomicMass: 83.80 }
};

// 更新原子模型
function updateAtomModel(elementSymbol) {
    const element = elementsData[elementSymbol];
    const atomModel = document.getElementById('atom-model');
    const atomInfo = document.getElementById('atom-info');

    if (!element) return;

    // 更新原子模型可视化
    atomModel.innerHTML = generateAtomVisualization(element);
    atomInfo.innerHTML = generateElementInfo(element);
}

// 生成原子可视化
function generateAtomVisualization(element) {
    const { protons, neutrons, electrons, name } = element;

    return `
        <div class="atom-visualization">
            <div class="nucleus">
                <div class="proton">p⁺</div>
                <div class="neutron">n⁰</div>
                <div class="nucleus-label">原子核 (${protons}p⁺ + ${neutrons}n⁰)</div>
            </div>
            ${generateElectronShells(electrons)}
            <div class="element-name">${name}原子</div>
        </div>
    `;
}

// 生成电子层
function generateElectronShells(electronCount) {
    let shells = '';
    let remainingElectrons = electronCount;

    // 简单模拟电子层分布
    const shellCapacity = [2, 8, 18, 32];
    const shellNames = ['K', 'L', 'M', 'N'];

    for (let i = 0; i < shellCapacity.length && remainingElectrons > 0; i++) {
        const electronsInShell = Math.min(shellCapacity[i], remainingElectrons);
        const radius = 40 + i * 60;

        shells += `
            <div class="electron-shell" style="width: ${radius * 2}px; height: ${radius * 2}px;">
                <div class="shell-label">${shellNames[i]}层 (${electronsInShell}e⁻)</div>
                ${generateElectrons(electronsInShell, radius)}
            </div>
        `;

        remainingElectrons -= electronsInShell;
    }

    return shells;
}

// 生成电子
function generateElectrons(count, radius) {
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
}

// 生成元素信息
function generateElementInfo(element) {
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
}

// 创建简化周期表
function createSimplePeriodicTable() {
    const preview = document.getElementById('pt-preview');
    const elements = [
        'H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He',
        'Li', 'Be', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne',
        'Na', 'Mg', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'
    ];

    let tableHTML = '<div class="simple-periodic-table">';

    elements.forEach((element, index) => {
        if (element) {
            const category = elementsData[element]?.category || 'transition-metal';
            tableHTML += `<div class="pt-element ${category}" title="${element}">${element}</div>`;
        } else {
            tableHTML += '<div class="pt-empty"></div>';
        }
    });

    tableHTML += '</div>';
    preview.innerHTML = tableHTML;
}

// 创建元素性质对比表格
function createComparisonTable() {
    const tableBody = document.getElementById('comparison-table-body');
    
    // 电负性数据（鲍林标度）- 扩展到前36个元素
    const electronegativityData = {
        'H': 2.20, 'He': null, 'Li': 0.98, 'Be': 1.57, 'B': 2.04,
        'C': 2.55, 'N': 3.04, 'O': 3.44, 'F': 3.98, 'Ne': null,
        'Na': 0.93, 'Mg': 1.31, 'Al': 1.61, 'Si': 1.90, 'P': 2.19,
        'S': 2.58, 'Cl': 3.16, 'Ar': null, 'K': 0.82, 'Ca': 1.00,
        'Sc': 1.36, 'Ti': 1.54, 'V': 1.63, 'Cr': 1.66, 'Mn': 1.55,
        'Fe': 1.83, 'Co': 1.88, 'Ni': 1.91, 'Cu': 1.90, 'Zn': 1.65,
        'Ga': 1.81, 'Ge': 2.01, 'As': 2.18, 'Se': 2.55, 'Br': 2.96, 'Kr': null
    };

    // 元素类别中文名称
    const categoryNames = {
        'alkali-metal': '碱金属',
        'alkaline-earth': '碱土金属',
        'transition-metal': '过渡金属',
        'basic-metal': '基本金属',
        'semi-metal': '半金属',
        'non-metal': '非金属',
        'halogen': '卤素',
        'noble-gas': '稀有气体'
    };

    let tableHTML = '';

    // 选择代表性元素进行对比（包含更多元素类型）
    const selectedElements = [
        'H', 'Li', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 
        'P', 'S', 'Cl', 'K', 'Ca', 'Sc', 'Ti', 'Cr', 'Fe', 'Cu', 
        'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'
    ];

    selectedElements.forEach(symbol => {
        const element = elementsData[symbol];
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
}

// 章节切换功能
function showSection(sectionId) {
    // 隐藏所有章节
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 显示目标章节
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 更新导航激活状态
    updateNavActiveState(sectionId);

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 更新导航激活状态
function updateNavActiveState(activeSection) {
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

// 初始化页面
document.addEventListener('DOMContentLoaded', function () {
    // 默认显示首页
    showSection('home');

    // 初始化原子模型（默认显示锂）
    updateAtomModel('Li');

    // 创建简化周期表
    createSimplePeriodicTable();

    // 创建元素性质对比表格
    createComparisonTable();

    // 添加键盘导航
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            showSection('home');
        }
    });

    // 添加导航点击事件
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href')?.substring(1);
            if (targetId) {
                showSection(targetId);
            }
        });
    });

    // 添加课程卡片点击事件
    const frameworkCards = document.querySelectorAll('.framework-card');
    frameworkCards.forEach(card => {
        card.addEventListener('click', function () {
            const targetId = this.getAttribute('onclick')?.match(/'(.*?)'/)?.[1];
            if (targetId) {
                showSection(targetId);
            }
        });
    });

    // 初始化化学键章节
    showBondAnimation('ionic');
    showCovalentBond('h2');
    showMolecularGeometry('linear');
    showIntermolecularForces('vdw');
});

// 化学键章节功能

// 显示化学键动画
function showBondAnimation(bondType) {
    const animation = document.getElementById('bond-animation');
    const info = document.getElementById('bond-info');
    
    let animationHTML = '';
    let infoHTML = '';

    switch(bondType) {
        case 'ionic':
            animationHTML = `
                <div class="bond-visualization">
                    <div class="atom-pair">
                        <div class="atom na-atom" data-atom="Na">Na</div>
                        <div class="electron-transfer">→ e⁻ →</div>
                        <div class="atom cl-atom" data-atom="Cl">Cl</div>
                    </div>
                    <div class="ion-pair">
                        <div class="ion na-ion">Na⁺</div>
                        <div class="bond-line">+</div>
                        <div class="ion cl-ion">Cl⁻</div>
                    </div>
                    <div class="ionic-compound">NaCl</div>
                </div>
            `;
            infoHTML = `
                <h4>离子键信息</h4>
                <p><strong>形成过程：</strong>钠原子失去一个电子形成Na⁺，氯原子获得一个电子形成Cl⁻</p>
                <p><strong>电负性差：</strong>3.16 - 0.93 = 2.23 (>1.7，典型离子键)</p>
                <p><strong>键能：</strong>约787 kJ/mol</p>
            `;
            break;
        
        case 'covalent':
            animationHTML = `
                <div class="bond-visualization">
                    <div class="molecule-water">
                        <div class="atom o-atom">O</div>
                        <div class="bond-lines">
                            <div class="bond covalent-bond">H</div>
                            <div class="bond covalent-bond">H</div>
                        </div>
                    </div>
                    <div class="electron-pairs">
                        <div class="electron-pair">共用电子对</div>
                    </div>
                </div>
            `;
            infoHTML = `
                <h4>共价键信息</h4>
                <p><strong>形成过程：</strong>氧原子与氢原子共用电子对</p>
                <p><strong>电负性差：</strong>3.44 - 2.20 = 1.24 (极性共价键)</p>
                <p><strong>键角：</strong>104.5°</p>
            `;
            break;
        
        case 'metallic':
            animationHTML = `
                <div class="bond-visualization">
                    <div class="metal-lattice">
                        <div class="metal-ions">
                            <div class="metal-ion">Cu²⁺</div>
                            <div class="metal-ion">Cu²⁺</div>
                            <div class="metal-ion">Cu²⁺</div>
                        </div>
                        <div class="electron-sea">
                            <div class="electron-dot">e⁻</div>
                            <div class="electron-dot">e⁻</div>
                            <div class="electron-dot">e⁻</div>
                        </div>
                    </div>
                </div>
            `;
            infoHTML = `
                <h4>金属键信息</h4>
                <p><strong>形成过程：</strong>金属原子释放价电子形成电子海</p>
                <p><strong>特点：</strong>正离子沉浸在电子海中</p>
                <p><strong>性质：</strong>导电性、延展性、金属光泽</p>
            `;
            break;
    }

    animation.innerHTML = animationHTML;
    info.innerHTML = infoHTML;
}

// 显示共价键可视化
function showCovalentBond(molecule) {
    const visualization = document.getElementById('covalent-visualization');
    
    let visualizationHTML = '';

    switch(molecule) {
        case 'h2':
            visualizationHTML = `
                <div class="molecule-model">
                    <div class="atom hydrogen">H</div>
                    <div class="bond single-bond">—</div>
                    <div class="atom hydrogen">H</div>
                    <div class="electron-cloud">
                        <div class="cloud-label">电子云重叠区域</div>
                    </div>
                </div>
                <div class="molecule-info">
                    <p><strong>氢气分子 (H₂)</strong></p>
                    <p>非极性共价键，键长74pm</p>
                </div>
            `;
            break;
        
        case 'h2o':
            visualizationHTML = `
                <div class="molecule-model water">
                    <div class="atom oxygen">O</div>
                    <div class="bonds-water">
                        <div class="bond covalent-bond">H</div>
                        <div class="bond covalent-bond">H</div>
                    </div>
                    <div class="electron-cloud water-cloud">
                        <div class="cloud-label">极性分子</div>
                    </div>
                </div>
                <div class="molecule-info">
                    <p><strong>水分子 (H₂O)</strong></p>
                    <p>极性共价键，键角104.5°</p>
                </div>
            `;
            break;
        
        case 'co2':
            visualizationHTML = `
                <div class="molecule-model co2">
                    <div class="bond double-bond">O</div>
                    <div class="atom carbon">C</div>
                    <div class="bond double-bond">O</div>
                </div>
                <div class="molecule-info">
                    <p><strong>二氧化碳分子 (CO₂)</strong></p>
                    <p>直线形，非极性分子</p>
                </div>
            `;
            break;
        
        case 'nh3':
            visualizationHTML = `
                <div class="molecule-model ammonia">
                    <div class="atom nitrogen">N</div>
                    <div class="bonds-ammonia">
                        <div class="bond covalent-bond">H</div>
                        <div class="bond covalent-bond">H</div>
                        <div class="bond covalent-bond">H</div>
                    </div>
                </div>
                <div class="molecule-info">
                    <p><strong>氨分子 (NH₃)</strong></p>
                    <p>三角锥形，极性分子</p>
                </div>
            `;
            break;
    }

    visualization.innerHTML = visualizationHTML;
}

// 显示分子几何构型
function showMolecularGeometry(geometry) {
    const visualization = document.getElementById('geometry-visualization');
    
    let visualizationHTML = '';

    switch(geometry) {
        case 'linear':
            visualizationHTML = `
                <div class="geometry-model linear">
                    <div class="central-atom">C</div>
                    <div class="bond-line horizontal">O</div>
                    <div class="bond-line horizontal reverse">O</div>
                </div>
                <div class="geometry-info">
                    <p><strong>直线形</strong></p>
                    <p>电子对数：2，孤电子对数：0</p>
                    <p>示例：CO₂，键角180°</p>
                </div>
            `;
            break;
        
        case 'bent':
            visualizationHTML = `
                <div class="geometry-model bent">
                    <div class="central-atom">O</div>
                    <div class="bond-line angled">H</div>
                    <div class="bond-line angled reverse">H</div>
                    <div class="lone-pairs">
                        <div class="lone-pair">孤电子对</div>
                        <div class="lone-pair">孤电子对</div>
                    </div>
                </div>
                <div class="geometry-info">
                    <p><strong>V形</strong></p>
                    <p>电子对数：4，孤电子对数：2</p>
                    <p>示例：H₂O，键角104.5°</p>
                </div>
            `;
            break;
        
        case 'trigonal':
            visualizationHTML = `
                <div class="geometry-model trigonal">
                    <div class="central-atom">N</div>
                    <div class="bond-line pyramid">H</div>
                    <div class="bond-line pyramid">H</div>
                    <div class="bond-line pyramid">H</div>
                    <div class="lone-pair">孤电子对</div>
                </div>
                <div class="geometry-info">
                    <p><strong>三角锥形</strong></p>
                    <p>电子对数：4，孤电子对数：1</p>
                    <p>示例：NH₃，键角107°</p>
                </div>
            `;
            break;
        
        case 'tetrahedral':
            visualizationHTML = `
                <div class="geometry-model tetrahedral">
                    <div class="central-atom">C</div>
                    <div class="bond-line tetra">H</div>
                    <div class="bond-line tetra">H</div>
                    <div class="bond-line tetra">H</div>
                    <div class="bond-line tetra">H</div>
                </div>
                <div class="geometry-info">
                    <p><strong>四面体形</strong></p>
                    <p>电子对数：4，孤电子对数：0</p>
                    <p>示例：CH₄，键角109.5°</p>
                </div>
            `;
            break;
    }

    visualization.innerHTML = visualizationHTML;
}

// 显示分子间作用力
function showIntermolecularForces(forceType) {
    const visualization = document.getElementById('forces-visualization');
    const description = document.getElementById('force-description');
    
    let visualizationHTML = '';
    let descriptionText = '';

    switch(forceType) {
        case 'vdw':
            visualizationHTML = `
                <div class="force-model vdw">
                    <div class="molecule nonpolar">CH₄</div>
                    <div class="force-lines">
                        <div class="force-line">范德华力</div>
                    </div>
                    <div class="molecule nonpolar">CH₄</div>
                </div>
            `;
            descriptionText = '范德华力：所有分子间都存在的作用力，包括取向力、诱导力和色散力。色散力是最主要的范德华力。';
            break;
        
        case 'hydrogen':
            visualizationHTML = `
                <div class="force-model hydrogen">
                    <div class="molecule water">H₂O</div>
                    <div class="hydrogen-bond">氢键</div>
                    <div class="molecule water">H₂O</div>
                </div>
            `;
            descriptionText = '氢键：特殊的分子间作用力，存在于H与N、O、F之间。比范德华力强，显著影响物质性质。';
            break;
        
        case 'dipole':
            visualizationHTML = `
                <div class="force-model dipole">
                    <div class="molecule polar">HCl</div>
                    <div class="dipole-interaction">偶极-偶极作用</div>
                    <div class="molecule polar">HCl</div>
                </div>
            `;
            descriptionText = '偶极-偶极作用：极性分子间的相互作用，分子永久偶极间的静电吸引。';
            break;
    }

    visualization.innerHTML = visualizationHTML;
    description.textContent = descriptionText;
}

// 离子键动画控制
function startIonicAnimation() {
    const animation = document.getElementById('ionic-animation');
    animation.innerHTML = `
        <div class="ionic-animation">
            <div class="step step1">
                <div class="atom na">Na</div>
                <div class="atom cl">Cl</div>
                <div class="label">步骤1：原子接近</div>
            </div>
            <div class="step step2">
                <div class="electron-transfer">
                    <div class="electron">e⁻</div>
                    <div class="arrow">→</div>
                </div>
                <div class="label">步骤2：电子转移</div>
            </div>
            <div class="step step3">
                <div class="ion na-ion">Na⁺</div>
                <div class="ion cl-ion">Cl⁻</div>
                <div class="label">步骤3：形成离子</div>
            </div>
            <div class="step step4">
                <div class="crystal">NaCl晶体</div>
                <div class="label">步骤4：形成离子晶体</div>
            </div>
        </div>
    `;
}

function resetIonicAnimation() {
    const animation = document.getElementById('ionic-animation');
    animation.innerHTML = '<p>点击"开始动画"查看离子键形成过程</p>';
}

// 化学键能量计算器
function calculateBondEnergy() {
    const bondType = document.getElementById('bond-type').value;
    const bondCount = parseInt(document.getElementById('bond-count').value);
    
    const bondEnergies = {
        'H-H': 436,
        'O=O': 498,
        'N≡N': 945,
        'C-C': 347,
        'C=O': 799
    };
    
    const energy = bondEnergies[bondType] * bondCount;
    const result = document.getElementById('energy-result');
    
    result.innerHTML = `
        <div class="energy-result">
            <h5>计算结果</h5>
            <p>化学键类型：${bondType}</p>
            <p>化学键数量：${bondCount}</p>
            <p>总键能：<strong>${energy} kJ/mol</strong></p>
            <p class="energy-note">注：键能越大，化学键越稳定</p>
        </div>
    `;
}

// 分子极性实验
function runPolarityExperiment(molecule) {
    const container = document.getElementById('molecule-container');
    const result = document.getElementById('experiment-result');
    
    const polarityData = {
        'h2o': { name: '水 (H₂O)', polar: true, reason: 'V形结构，正负电荷中心不重合' },
        'co2': { name: '二氧化碳 (CO₂)', polar: false, reason: '直线形结构，正负电荷中心重合' },
        'nh3': { name: '氨 (NH₃)', polar: true, reason: '三角锥形结构，正负电荷中心不重合' },
        'ch4': { name: '甲烷 (CH₄)', polar: false, reason: '四面体结构，正负电荷中心重合' },
        'hcl': { name: '氯化氢 (HCl)', polar: true, reason: '直线形但电负性差异大，正负电荷中心不重合' }
    };
    
    const data = polarityData[molecule];
    
    container.innerHTML = `
        <div class="molecule ${data.polar ? 'polar' : 'nonpolar'}">
            ${data.name}
        </div>
    `;
    
    result.innerHTML = `
        <div class="experiment-analysis">
            <h5>实验结果分析</h5>
            <p>分子：${data.name}</p>
            <p>极性：<strong>${data.polar ? '极性分子' : '非极性分子'}</strong></p>
            <p>原因：${data.reason}</p>
            <p>电场中表现：${data.polar ? '会偏转' : '不会偏转'}</p>
        </div>
    `;
}

// 化学键类型测验
let currentQuestion = 0;
let score = 0;
const quizQuestions = [
    {
        question: "NaCl（氯化钠）中的化学键类型是？",
        options: ["离子键", "共价键", "金属键", "氢键"],
        answer: 0
    },
    {
        question: "H₂O（水）分子中的化学键类型是？",
        options: ["离子键", "共价键", "金属键", "范德华力"],
        answer: 1
    },
    {
        question: "铜金属中的化学键类型是？",
        options: ["离子键", "共价键", "金属键", "氢键"],
        answer: 2
    },
    {
        question: "下列哪种物质中存在氢键？",
        options: ["NaCl", "H₂O", "CH₄", "CO₂"],
        answer: 1
    },
    {
        question: "CO₂（二氧化碳）分子的几何构型是？",
        options: ["直线形", "V形", "三角锥形", "四面体形"],
        answer: 0
    }
];

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('start-quiz-btn').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    const options = document.getElementById('quiz-options');
    
    document.getElementById('question-text').textContent = question.question;
    
    options.innerHTML = '';
    question.options.forEach((option, index) => {
        options.innerHTML += `
            <label class="quiz-option">
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label>
        `;
    });
    
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('请选择一个答案！');
        return;
    }
    
    const answerIndex = parseInt(selected.value);
    const question = quizQuestions[currentQuestion];
    
    if (answerIndex === question.answer) {
        score++;
        document.getElementById('quiz-score').textContent = score;
        document.getElementById('quiz-result').innerHTML = '<p class="correct">✓ 回答正确！</p>';
    } else {
        document.getElementById('quiz-result').innerHTML = `
            <p class="incorrect">✗ 回答错误！正确答案是：${question.options[question.answer]}</p>
        `;
    }
    
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
        document.getElementById('quiz-result').innerHTML = '';
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const result = document.getElementById('quiz-result');
    const percentage = (score / quizQuestions.length) * 100;
    
    let message = '';
    if (percentage >= 80) {
        message = '🎉 优秀！你对化学键的理解很深入！';
    } else if (percentage >= 60) {
        message = '👍 良好！继续努力！';
    } else {
        message = '💪 加油！建议复习一下化学键相关知识。';
    }
    
    result.innerHTML = `
        <div class="quiz-summary">
            <h5>测验完成！</h5>
            <p>得分：${score}/${quizQuestions.length} (${percentage}%)</p>
            <p>${message}</p>
            <button onclick="startQuiz()">重新测验</button>
        </div>
    `;
    
    document.getElementById('start-quiz-btn').style.display = 'inline-block';
}

// 化学键应用案例可视化
function showApplication(appType) {
    const visual = document.getElementById('application-visual');
    const info = document.getElementById('application-info');
    
    const applications = {
        'salt': {
            visual: `
                <div class="crystal-structure">
                    <div class="na-ion">Na⁺</div>
                    <div class="cl-ion">Cl⁻</div>
                    <div class="crystal-label">NaCl晶体结构</div>
                </div>
            `,
            info: '食盐晶体中，Na⁺和Cl⁻通过离子键形成规则的立方晶格结构，赋予食盐高熔点、易溶于水的特性。'
        },
        'plastic': {
            visual: `
                <div class="polymer-chain">
                    <div class="carbon-atom">C</div>
                    <div class="carbon-atom">C</div>
                    <div class="carbon-atom">C</div>
                    <div class="chain-label">聚乙烯分子链</div>
                </div>
            `,
            info: '聚乙烯中的碳碳共价键形成长链分子，这些分子通过范德华力相互缠绕，赋予塑料柔韧性和耐用性。'
        },
        'copper': {
            visual: `
                <div class="metal-lattice-app">
                    <div class="cu-ion">Cu²⁺</div>
                    <div class="electron-dot-app">e⁻</div>
                    <div class="lattice-label">铜金属晶格</div>
                </div>
            `,
            info: '铜金属中，Cu²⁺离子沉浸在电子海中，金属键使电子可以自由移动，赋予铜优良的导电性和延展性。'
        },
        'dna': {
            visual: `
                <div class="dna-structure">
                    <div class="base-pair">A-T</div>
                    <div class="hydrogen-bond-app">氢键</div>
                    <div class="base-pair">G-C</div>
                    <div class="dna-label">DNA碱基对</div>
                </div>
            `,
            info: 'DNA双螺旋结构中，碱基对（A-T、G-C）通过氢键连接，维持了遗传信息的稳定性和特异性。'
        }
    };
    
    const app = applications[appType];
    visual.innerHTML = app.visual;
    info.textContent = app.info;
}
