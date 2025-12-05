// 化学反应原理模块
console.log('Reactions module script开始执行');
const Reactions = {
    // 初始化函数
    init() {
        console.log('初始化化学反应原理模块');
        this.initTabs();
        this.initReactionAnimations();
        this.initEnergyVisualization();
        this.initRateExperiment();
        this.initEquilibriumDemo();
        this.initPracticeQuiz();
        this.initCalculators();
    },

    // 初始化标签页
    initTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;
                
                // 移除所有激活状态
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // 激活当前标签
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
                
                // 重新初始化当前标签的内容
                this.onTabSwitch(tabId);
            });
        });
    },

    // 标签切换回调
    onTabSwitch(tabId) {
        switch(tabId) {
            case 'reaction-types':
                this.resetReactionAnimations();
                break;
            case 'energy-changes':
                this.drawEnergyGraph();
                break;
            case 'reaction-rate':
                this.resetRateExperiment();
                break;
            case 'chemical-equilibrium':
                this.resetEquilibrium();
                break;
        }
    },

    // 初始化反应类型动画
    initReactionAnimations() {
        const playButtons = document.querySelectorAll('.play-animation');
        playButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const canvasId = btn.dataset.canvas;
                this.animateReaction(canvasId);
            });
        });

        // 初始化练习
        this.initPracticeQuiz();
    },

    // 绘制反应动画
    animateReaction(canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const reactionType = canvasId.replace('-canvas', '');
        
        switch(reactionType) {
            case 'combination':
                this.drawCombinationReaction(ctx, canvas);
                break;
            case 'decomposition':
                this.drawDecompositionReaction(ctx, canvas);
                break;
            case 'replacement':
                this.drawReplacementReaction(ctx, canvas);
                break;
            case 'double-displacement':
                this.drawDoubleDisplacementReaction(ctx, canvas);
                break;
        }
    },

    // 绘制化合反应
    drawCombinationReaction(ctx, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        let progress = 0;
        const duration = 2000; // 2秒动画
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            progress = Math.min((currentTime - startTime) / duration, 1);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 绘制两个反应物原子
            const atom1X = centerX - 80 + (progress * 40);
            const atom2X = centerX + 80 - (progress * 40);
            
            // 原子A
            ctx.beginPath();
            ctx.arc(atom1X, centerY, 25, 0, Math.PI * 2);
            ctx.fillStyle = '#ff6b6b';
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('A', atom1X, centerY);
            
            // 原子B
            ctx.beginPath();
            ctx.arc(atom2X, centerY, 25, 0, Math.PI * 2);
            ctx.fillStyle = '#4fc3f7';
            ctx.fill();
            ctx.fillStyle = 'white';
            ctx.fillText('B', atom2X, centerY);
            
            // 如果动画完成，绘制生成物分子
            if (progress >= 1) {
                ctx.beginPath();
                ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#66bb6a';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('AB', centerX, centerY);
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    },

    // 绘制分解反应
    drawDecompositionReaction(ctx, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        let progress = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            progress = Math.min((currentTime - startTime) / duration, 1);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 开始绘制分子
            if (progress < 0.5) {
                // 显示分子
                ctx.beginPath();
                ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#66bb6a';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('AB', centerX, centerY);
            } else {
                // 分解过程
                const atom1X = centerX - 80 * ((progress - 0.5) * 2);
                const atom2X = centerX + 80 * ((progress - 0.5) * 2);
                
                // 原子A
                ctx.beginPath();
                ctx.arc(atom1X, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = '#ff6b6b';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 16px Arial';
                ctx.fillText('A', atom1X, centerY);
                
                // 原子B
                ctx.beginPath();
                ctx.arc(atom2X, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = '#4fc3f7';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.fillText('B', atom2X, centerY);
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    },

    // 绘制置换反应
    drawReplacementReaction(ctx, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        let progress = 0;
        const duration = 2500;
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            progress = Math.min((currentTime - startTime) / duration, 1);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            if (progress < 0.4) {
                // 显示原子A和分子BC
                const atomAX = centerX - 60;
                const moleculeX = centerX + 60;
                
                // 原子A
                ctx.beginPath();
                ctx.arc(atomAX, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = '#ff9800';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 16px Arial';
                ctx.fillText('A', atomAX, centerY);
                
                // 分子BC
                ctx.beginPath();
                ctx.arc(moleculeX, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#66bb6a';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('BC', moleculeX, centerY);
            } else if (progress < 0.8) {
                // 反应过程
                const moveProgress = (progress - 0.4) / 0.4;
                
                // 原子A移动
                const atomAX = centerX - 60 + (120 * moveProgress);
                ctx.beginPath();
                ctx.arc(atomAX, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = '#ff9800';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 16px Arial';
                ctx.fillText('A', atomAX, centerY);
                
                // 原子B被替换出来
                const atomBX = centerX + 60 - (100 * moveProgress);
                ctx.beginPath();
                ctx.arc(atomBX, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = '#ff6b6b';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 16px Arial';
                ctx.fillText('B', atomBX, centerY);
                
                // 分子AC形成中
                const moleculeX = centerX + 60;
                ctx.beginPath();
                ctx.arc(moleculeX, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(102, 187, 106, ${moveProgress})`;
                ctx.fill();
                if (moveProgress > 0.5) {
                    ctx.fillStyle = 'white';
                    ctx.font = 'bold 20px Arial';
                    ctx.fillText('AC', moleculeX, centerY);
                }
            } else {
                // 最终产物
                const atomBX = centerX - 80;
                const moleculeX = centerX + 80;
                
                // 原子B
                ctx.beginPath();
                ctx.arc(atomBX, centerY, 25, 0, Math.PI * 2);
                ctx.fillStyle = '#ff6b6b';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 16px Arial';
                ctx.fillText('B', atomBX, centerY);
                
                // 分子AC
                ctx.beginPath();
                ctx.arc(moleculeX, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#66bb6a';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('AC', moleculeX, centerY);
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    },

    // 绘制复分解反应
    drawDoubleDisplacementReaction(ctx, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        let progress = 0;
        const duration = 2500;
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            progress = Math.min((currentTime - startTime) / duration, 1);
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            if (progress < 0.4) {
                // 显示两个分子AB和CD
                const molecule1X = centerX - 60;
                const molecule2X = centerX + 60;
                
                // 分子AB
                ctx.beginPath();
                ctx.arc(molecule1X, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#66bb6a';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('AB', molecule1X, centerY);
                
                // 分子CD
                ctx.beginPath();
                ctx.arc(molecule2X, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#ab47bc';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('CD', molecule2X, centerY);
            } else if (progress < 0.8) {
                // 离子交换过程
                const exchangeProgress = (progress - 0.4) / 0.4;
                
                // 绘制交换的离子
                const ionAX = centerX - 60 + (30 * exchangeProgress);
                const ionCX = centerX + 60 - (30 * exchangeProgress);
                
                // 离子A
                ctx.beginPath();
                ctx.arc(ionAX, centerY, 20, 0, Math.PI * 2);
                ctx.fillStyle = '#ff6b6b';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 14px Arial';
                ctx.fillText('A', ionAX, centerY);
                
                // 离子C
                ctx.beginPath();
                ctx.arc(ionCX, centerY, 20, 0, Math.PI * 2);
                ctx.fillStyle = '#4fc3f7';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 14px Arial';
                ctx.fillText('C', ionCX, centerY);
            } else {
                // 最终产物AD和CB
                const molecule1X = centerX - 60;
                const molecule2X = centerX + 60;
                
                // 分子AD
                ctx.beginPath();
                ctx.arc(molecule1X, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#ff9800';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('AD', molecule1X, centerY);
                
                // 分子CB
                ctx.beginPath();
                ctx.arc(molecule2X, centerY, 35, 0, Math.PI * 2);
                ctx.fillStyle = '#0288d1';
                ctx.fill();
                ctx.fillStyle = 'white';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('CB', molecule2X, centerY);
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    },

    // 重置反应动画
    resetReactionAnimations() {
        const canvases = [
            'combination-canvas',
            'decomposition-canvas',
            'replacement-canvas',
            'double-displacement-canvas'
        ];
        
        canvases.forEach(canvasId => {
            const canvas = document.getElementById(canvasId);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
    },

    // 初始化练习测验
    initPracticeQuiz() {
        const options = document.querySelectorAll('.option-btn');
        const feedback = document.getElementById('feedback');
        
        // 正确答案是"置换"
        const correctAnswer = 'replacement';
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                const answer = option.dataset.answer;
                
                // 移除所有选项的选中状态
                options.forEach(opt => {
                    opt.style.background = '#f8f9fa';
                    opt.style.borderColor = '#ddd';
                });
                
                // 标记选中的选项
                option.style.background = '#e3f2fd';
                option.style.borderColor = '#667eea';
                
                // 检查答案
                if (answer === correctAnswer) {
                    feedback.textContent = '正确！这是一个置换反应：铁置换出硫酸铜中的铜。';
                    feedback.className = 'feedback correct';
                } else {
                    feedback.textContent = `错误。正确答案是"置换反应"。铁(Fe)置换出硫酸铜(CuSO₄)中的铜(Cu)。`;
                    feedback.className = 'feedback incorrect';
                }
            });
        });
    },

    // 初始化能量可视化
    initEnergyVisualization() {
        const exothermicBtn = document.getElementById('show-exothermic');
        const endothermicBtn = document.getElementById('show-endothermic');
        const progressSlider = document.getElementById('reaction-progress');
        const progressValue = document.getElementById('progress-value');
        
        if (exothermicBtn) {
            exothermicBtn.addEventListener('click', () => {
                this.currentEnergyType = 'exothermic';
                this.drawEnergyGraph();
            });
        }
        
        if (endothermicBtn) {
            endothermicBtn.addEventListener('click', () => {
                this.currentEnergyType = 'endothermic';
                this.drawEnergyGraph();
            });
        }
        
        if (progressSlider && progressValue) {
            progressSlider.addEventListener('input', () => {
                progressValue.textContent = `${progressSlider.value}%`;
                this.drawEnergyGraph(parseInt(progressSlider.value));
            });
        }
        
        // 默认显示放热反应
        this.currentEnergyType = 'exothermic';
        this.drawEnergyGraph(50);
    },

    // 绘制能量图
    drawEnergyGraph(progress = 50) {
        const canvas = document.getElementById('energy-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // 绘制坐标轴
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        
        // X轴
        ctx.beginPath();
        ctx.moveTo(40, height - 40);
        ctx.lineTo(width - 40, height - 40);
        ctx.stroke();
        
        // Y轴
        ctx.beginPath();
        ctx.moveTo(40, 40);
        ctx.lineTo(40, height - 40);
        ctx.stroke();
        
        // 坐标轴标签
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.fillText('反应过程', width / 2, height - 10);
        ctx.save();
        ctx.translate(20, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('能量', 0, 0);
        ctx.restore();
        
        // 绘制能量曲线
        const isExothermic = this.currentEnergyType === 'exothermic';
        const startY = isExothermic ? 120 : 80;
        const peakY = isExothermic ? 200 : 160;
        const endY = isExothermic ? 80 : 120;
        
        // 反应物能量水平
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(50, startY);
        ctx.lineTo(150, startY);
        ctx.stroke();
        
        // 活化能峰值
        ctx.beginPath();
        ctx.moveTo(150, startY);
        ctx.quadraticCurveTo(200, peakY, 250, endY);
        ctx.stroke();
        
        // 生成物能量水平
        ctx.beginPath();
        ctx.moveTo(250, endY);
        ctx.lineTo(350, endY);
        ctx.stroke();
        
        // 标注能量值
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Arial';
        
        // 反应物
        ctx.fillText('反应物', 70, startY - 10);
        
        // 活化能
        ctx.fillText('Ea', 200, peakY - 10);
        
        // 生成物
        ctx.fillText('生成物', 300, endY - 10);
        
        // 焓变ΔH
        const deltaH = endY - startY;
        const deltaHLabel = isExothermic ? 'ΔH < 0 (放热)' : 'ΔH > 0 (吸热)';
        ctx.fillText(deltaHLabel, width - 120, 30);
        
        // 绘制当前进度指示器
        const progressX = 50 + (300 * (progress / 100));
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(progressX, 40);
        ctx.lineTo(progressX, height - 40);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 进度值
        ctx.fillStyle = '#667eea';
        ctx.fillText(`${progress}%`, progressX - 15, 30);
    },

    // 初始化反应速率实验
    initRateExperiment() {
        const concentrationSlider = document.getElementById('concentration-slider');
        const temperatureSlider = document.getElementById('temperature-slider');
        const catalystSelect = document.getElementById('catalyst-select');
        const startBtn = document.getElementById('start-experiment');
        const simulateBtn = document.getElementById('simulate-collisions');
        
        const concentrationValue = document.getElementById('concentration-value');
        const temperatureValue = document.getElementById('temperature-value');
        
        if (concentrationSlider && concentrationValue) {
            concentrationSlider.addEventListener('input', () => {
                concentrationValue.textContent = `${concentrationSlider.value} mol/L`;
            });
        }
        
        if (temperatureSlider && temperatureValue) {
            temperatureSlider.addEventListener('input', () => {
                temperatureValue.textContent = `${temperatureSlider.value}°C`;
            });
        }
        
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                const concentration = parseFloat(concentrationSlider.value);
                const temperature = parseInt(temperatureSlider.value);
                const catalyst = catalystSelect.value;
                
                this.runRateExperiment(concentration, temperature, catalyst);
            });
        }
        
        if (simulateBtn) {
            simulateBtn.addEventListener('click', () => {
                this.simulateCollisions();
            });
        }
        
        // 初始化碰撞模拟
        this.initCollisionSimulation();
    },

    // 运行反应速率实验
    runRateExperiment(concentration, temperature, catalyst) {
        const canvas = document.getElementById('rate-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // 计算反应速率参数
        const baseRate = 0.5;
        const concentrationFactor = concentration * 0.8;
        const temperatureFactor = 1 + (temperature - 25) * 0.02;
        const catalystFactor = catalyst === 'none' ? 1 : catalyst === 'enzyme' ? 2 : 1.5;
        
        const reactionRate = baseRate * concentrationFactor * temperatureFactor * catalystFactor;
        
        // 绘制反应物浓度曲线
        const timePoints = 100;
        const data = [];
        
        for (let i = 0; i <= timePoints; i++) {
            const t = i / timePoints * 10; // 0-10秒
            const reactantConc = Math.exp(-reactionRate * t);
            const productConc = 1 - reactantConc;
            const instantRate = reactionRate * reactantConc;
            
            data.push({ t, reactantConc, productConc, instantRate });
        }
        
        // 绘制坐标轴
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        
        // X轴
        ctx.beginPath();
        ctx.moveTo(50, height - 50);
        ctx.lineTo(width - 50, height - 50);
        ctx.stroke();
        
        // Y轴
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, height - 50);
        ctx.stroke();
        
        // 坐标轴标签
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.fillText('时间 (s)', width / 2, height - 20);
        ctx.save();
        ctx.translate(20, height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('浓度/速率', 0, 0);
        ctx.restore();
        
        // 绘制网格
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        
        // 水平网格
        for (let i = 0; i <= 10; i++) {
            const y = 50 + (height - 100) * (i / 10);
            ctx.beginPath();
            ctx.moveTo(50, y);
            ctx.lineTo(width - 50, y);
            ctx.stroke();
        }
        
        // 垂直网格
        for (let i = 0; i <= 10; i++) {
            const x = 50 + (width - 100) * (i / 10);
            ctx.beginPath();
            ctx.moveTo(x, 50);
            ctx.lineTo(x, height - 50);
            ctx.stroke();
        }
        
        // 绘制反应物浓度曲线
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        data.forEach((point, i) => {
            const x = 50 + (width - 100) * (i / timePoints);
            const y = height - 50 - (height - 100) * point.reactantConc;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // 绘制生成物浓度曲线
        ctx.strokeStyle = '#4caf50';
        ctx.beginPath();
        
        data.forEach((point, i) => {
            const x = 50 + (width - 100) * (i / timePoints);
            const y = height - 50 - (height - 100) * point.productConc;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // 绘制反应速率曲线
        ctx.strokeStyle = '#667eea';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        
        data.forEach((point, i) => {
            const x = 50 + (width - 100) * (i / timePoints);
            const y = height - 50 - (height - 100) * point.instantRate;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        ctx.setLineDash([]);
        
        // 显示实验参数
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`浓度: ${concentration} mol/L`, width - 150, 30);
        ctx.fillText(`温度: ${temperature}°C`, width - 150, 50);
        ctx.fillText(`催化剂: ${this.getCatalystName(catalyst)}`, width - 150, 70);
        ctx.fillText(`反应速率常数: ${reactionRate.toFixed(3)}`, width - 150, 90);
    },

    // 获取催化剂名称
    getCatalystName(catalyst) {
        switch(catalyst) {
            case 'none': return '无';
            case 'enzyme': return '酶';
            case 'metal': return '金属';
            default: return '未知';
        }
    },

    // 初始化碰撞模拟
    initCollisionSimulation() {
        this.collisionParticles = [];
        this.collisionAnimationId = null;
    },

    // 模拟碰撞
    simulateCollisions() {
        const canvas = document.getElementById('collision-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // 如果已经在动画中，停止它
        if (this.collisionAnimationId) {
            cancelAnimationFrame(this.collisionAnimationId);
            this.collisionAnimationId = null;
        }
        
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 创建粒子
        this.collisionParticles = [];
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            this.collisionParticles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                radius: Math.random() * 8 + 4,
                color: Math.random() > 0.5 ? '#ff6b6b' : '#4fc3f7',
                energy: Math.random() * 100 + 50 // 粒子能量
            });
        }
        
        // 开始动画
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // 更新和绘制粒子
            let collisions = 0;
            let effectiveCollisions = 0;
            
            for (let i = 0; i < this.collisionParticles.length; i++) {
                const p = this.collisionParticles[i];
                
                // 更新位置
                p.x += p.vx;
                p.y += p.vy;
                
                // 边界检查
                if (p.x < p.radius || p.x > canvas.width - p.radius) {
                    p.vx *= -1;
                }
                if (p.y < p.radius || p.y > canvas.height - p.radius) {
                    p.vy *= -1;
                }
                
                // 绘制粒子
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                // 检查碰撞
                for (let j = i + 1; j < this.collisionParticles.length; j++) {
                    const q = this.collisionParticles[j];
                    const dx = q.x - p.x;
                    const dy = q.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < p.radius + q.radius) {
                        collisions++;
                        
                        // 检查是否有效碰撞（能量足够且方向正确）
                        const totalEnergy = p.energy + q.energy;
                        const isEffective = totalEnergy > 150 && Math.random() > 0.7;
                        
                        if (isEffective) {
                            effectiveCollisions++;
                            
                            // 绘制有效碰撞效果
                            ctx.beginPath();
                            ctx.arc((p.x + q.x) / 2, (p.y + q.y) / 2, 10, 0, Math.PI * 2);
                            ctx.fillStyle = '#ffd700';
                            ctx.fill();
                        }
                        
                        // 简单碰撞响应
                        const angle = Math.atan2(dy, dx);
                        const targetX = p.x + Math.cos(angle) * (p.radius + q.radius);
                        const targetY = p.y + Math.sin(angle) * (p.radius + q.radius);
                        
                        const ax = (targetX - q.x) * 0.05;
                        const ay = (targetY - q.y) * 0.05;
                        
                        p.vx -= ax;
                        p.vy -= ay;
                        q.vx += ax;
                        q.vy += ay;
                    }
                }
            }
            
            // 显示碰撞统计
            ctx.fillStyle = '#333';
            ctx.font = '12px Arial';
            ctx.fillText(`总碰撞数: ${collisions}`, 10, 20);
            ctx.fillText(`有效碰撞数: ${effectiveCollisions}`, 10, 40);
            ctx.fillText(`有效碰撞比例: ${collisions > 0 ? ((effectiveCollisions / collisions) * 100).toFixed(1) : 0}%`, 10, 60);
            
            this.collisionAnimationId = requestAnimationFrame(animate);
        };
        
        animate();
    },

    // 重置速率实验
    resetRateExperiment() {
        const canvas = document.getElementById('rate-canvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        
        if (this.collisionAnimationId) {
            cancelAnimationFrame(this.collisionAnimationId);
            this.collisionAnimationId = null;
        }
    },

    // 初始化化学平衡演示
    initEquilibriumDemo() {
        const addReactantBtn = document.getElementById('add-reactant');
        const addProductBtn = document.getElementById('add-product');
        const changePressureBtn = document.getElementById('change-pressure');
        const changeTemperatureBtn = document.getElementById('change-temperature');
        const resetBtn = document.getElementById('reset-equilibrium');
        const calculateKBtn = document.getElementById('calculate-k');
        
        if (addReactantBtn) {
            addReactantBtn.addEventListener('click', () => {
                this.adjustEquilibrium('addReactant');
            });
        }
        
        if (addProductBtn) {
            addProductBtn.addEventListener('click', () => {
                this.adjustEquilibrium('addProduct');
            });
        }
        
        if (changePressureBtn) {
            changePressureBtn.addEventListener('click', () => {
                this.adjustEquilibrium('increasePressure');
            });
        }
        
        if (changeTemperatureBtn) {
            changeTemperatureBtn.addEventListener('click', () => {
                this.adjustEquilibrium('increaseTemperature');
            });
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetEquilibrium();
            });
        }
        
        if (calculateKBtn) {
            calculateKBtn.addEventListener('click', () => {
                this.calculateEquilibriumConstant();
            });
        }
        
        // 初始化平衡状态
        this.equilibriumState = {
            reactants: 50,
            products: 50,
            pressure: 1.0,
            temperature: 298,
            forwardRate: 0.5,
            reverseRate: 0.5
        };
        
        this.drawEquilibrium();
    },

    // 调整平衡状态
    adjustEquilibrium(action) {
        switch(action) {
            case 'addReactant':
                this.equilibriumState.reactants += 10;
                // 根据勒夏特列原理，增加反应物会使平衡向生成物方向移动
                this.equilibriumState.forwardRate += 0.1;
                this.equilibriumState.reverseRate -= 0.05;
                break;
                
            case 'addProduct':
                this.equilibriumState.products += 10;
                // 增加生成物会使平衡向反应物方向移动
                this.equilibriumState.forwardRate -= 0.05;
                this.equilibriumState.reverseRate += 0.1;
                break;
                
            case 'increasePressure':
                this.equilibriumState.pressure *= 1.5;
                // 增加压强会使平衡向气体分子数减少的方向移动
                // 假设正向反应气体分子数减少
                this.equilibriumState.forwardRate += 0.15;
                this.equilibriumState.reverseRate -= 0.1;
                break;
                
            case 'increaseTemperature':
                this.equilibriumState.temperature += 50;
                // 假设正向反应是吸热反应
                this.equilibriumState.forwardRate += 0.2;
                this.equilibriumState.reverseRate += 0.1;
                break;
        }
        
        // 确保速率非负
        this.equilibriumState.forwardRate = Math.max(0.1, this.equilibriumState.forwardRate);
        this.equilibriumState.reverseRate = Math.max(0.1, this.equilibriumState.reverseRate);
        
        // 确保浓度合理
        this.equilibriumState.reactants = Math.max(10, Math.min(90, this.equilibriumState.reactants));
        this.equilibriumState.products = Math.max(10, Math.min(90, this.equilibriumState.products));
        
        this.drawEquilibrium();
    },

    // 绘制平衡状态
    drawEquilibrium() {
        const canvas = document.getElementById('equilibrium-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        // 绘制容器
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 3;
        ctx.strokeRect(50, 50, width - 100, height - 100);
        
        // 绘制反应物和生成物区域
        const reactantHeight = (height - 100) * (this.equilibriumState.reactants / 100);
        const productHeight = (height - 100) * (this.equilibriumState.products / 100);
        
        // 反应物区域
        ctx.fillStyle = 'rgba(255, 107, 107, 0.6)';
        ctx.fillRect(50, height - 50 - reactantHeight, (width - 100) / 2, reactantHeight);
        
        // 生成物区域
        ctx.fillStyle = 'rgba(76, 175, 80, 0.6)';
        ctx.fillRect(width / 2, height - 50 - productHeight, (width - 100) / 2, productHeight);
        
        // 绘制箭头表示反应方向
        const centerX = width / 2;
        const centerY = height / 2;
        
        // 正向反应箭头
        ctx.fillStyle = '#333';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('正反应', centerX - 100, centerY - 20);
        
        ctx.strokeStyle = '#ff6b6b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX - 60, centerY);
        ctx.lineTo(centerX - 20, centerY);
        ctx.lineTo(centerX - 30, centerY - 5);
        ctx.moveTo(centerX - 20, centerY);
        ctx.lineTo(centerX - 30, centerY + 5);
        ctx.stroke();
        
        // 逆反应箭头
        ctx.fillStyle = '#333';
        ctx.fillText('逆反应', centerX + 60, centerY - 20);
        
        ctx.strokeStyle = '#4caf50';
        ctx.beginPath();
        ctx.moveTo(centerX + 20, centerY);
        ctx.lineTo(centerX + 60, centerY);
        ctx.lineTo(centerX + 50, centerY - 5);
        ctx.moveTo(centerX + 60, centerY);
        ctx.lineTo(centerX + 50, centerY + 5);
        ctx.stroke();
        
        // 绘制分子运动
        this.drawEquilibriumParticles(ctx, width, height);
        
        // 显示平衡状态信息
        ctx.fillStyle = '#333';
        ctx.font = 'bold 14px Arial';
        
        ctx.fillText(`反应物: ${this.equilibriumState.reactants.toFixed(1)}%`, 60, 40);
        ctx.fillText(`生成物: ${this.equilibriumState.products.toFixed(1)}%`, width - 160, 40);
        ctx.fillText(`正反应速率: ${this.equilibriumState.forwardRate.toFixed(2)}`, 60, height - 20);
        ctx.fillText(`逆反应速率: ${this.equilibriumState.reverseRate.toFixed(2)}`, width - 160, height - 20);
        
        // 显示是否平衡
        const isBalanced = Math.abs(this.equilibriumState.forwardRate - this.equilibriumState.reverseRate) < 0.1;
        const balanceText = isBalanced ? '动态平衡 ✓' : '未达到平衡';
        const balanceColor = isBalanced ? '#4caf50' : '#ff9800';
        
        ctx.fillStyle = balanceColor;
        ctx.font = 'bold 18px Arial';
        ctx.fillText(balanceText, centerX - 60, 40);
        
        // 显示条件
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.fillText(`压强: ${this.equilibriumState.pressure.toFixed(1)} atm`, centerX - 50, 60);
        ctx.fillText(`温度: ${this.equilibriumState.temperature} K`, centerX - 50, 75);
    },

    // 绘制平衡态分子运动
    drawEquilibriumParticles(ctx, width, height) {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            // 决定粒子是反应物还是生成物
            const isReactant = Math.random() < (this.equilibriumState.reactants / 100);
            const x = isReactant ? 
                50 + Math.random() * ((width - 100) / 2) :
                width / 2 + Math.random() * ((width - 100) / 2);
                
            const y = 50 + Math.random() * (height - 100);
            const radius = 5;
            const color = isReactant ? '#ff6b6b' : '#4caf50';
            
            // 绘制粒子
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            
            // 绘制运动方向线
            const angle = Math.random() * Math.PI * 2;
            const speed = 2;
            const endX = x + Math.cos(angle) * speed * 5;
            const endY = y + Math.sin(angle) * speed * 5;
            
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    },

    // 重置平衡状态
    resetEquilibrium() {
        this.equilibriumState = {
            reactants: 50,
            products: 50,
            pressure: 1.0,
            temperature: 298,
            forwardRate: 0.5,
            reverseRate: 0.5
        };
        
        this.drawEquilibrium();
    },

    // 计算平衡常数
    calculateEquilibriumConstant() {
        const a = parseFloat(document.getElementById('concentration-a').value) || 1.0;
        const b = parseFloat(document.getElementById('concentration-b').value) || 1.0;
        const c = parseFloat(document.getElementById('concentration-c').value) || 1.0;
        const d = parseFloat(document.getElementById('concentration-d').value) || 1.0;
        
        // 平衡常数 K = ([C][D]) / ([A][B])
        const K = (c * d) / (a * b);
        
        const result = document.getElementById('k-result');
        result.textContent = `平衡常数 K = ${K.toFixed(3)}`;
        result.style.color = '#2e7d32';
        result.style.fontWeight = 'bold';
        
        // 根据K值判断反应方向
        let direction = '';
        if (K > 1) {
            direction = '反应偏向生成物方向';
        } else if (K < 1) {
            direction = '反应偏向反应物方向';
        } else {
            direction = '反应处于平衡状态';
        }
        
        result.textContent += ` (${direction})`;
    },

    // 初始化计算器
    initCalculators() {
        const calculateEnergyBtn = document.getElementById('calculate-energy');
        if (calculateEnergyBtn) {
            calculateEnergyBtn.addEventListener('click', () => {
                this.calculateEnergyChange();
            });
        }
    },

    // 计算能量变化
    calculateEnergyChange() {
        const bondEnergy1 = parseFloat(document.getElementById('bond-energy-1').value) || 0;
        const bondEnergy2 = parseFloat(document.getElementById('bond-energy-2').value) || 0;
        
        // ΔH = 断裂键能 - 形成键能
        const deltaH = bondEnergy1 - bondEnergy2;
        
        const result = document.getElementById('energy-result');
        
        if (isNaN(deltaH)) {
            result.textContent = '请输入有效的数值';
            result.style.color = '#c62828';
        } else {
            result.textContent = `ΔH = ${deltaH.toFixed(1)} kJ/mol`;
            result.style.color = deltaH < 0 ? '#2e7d32' : '#c62828';
            
            if (deltaH < 0) {
                result.textContent += ' (放热反应)';
            } else if (deltaH > 0) {
                result.textContent += ' (吸热反应)';
            } else {
                result.textContent += ' (无能量变化)';
            }
        }
    }
};

// 导出模块
window.Reactions = Reactions;

// 模块加载完成后自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof Reactions !== 'undefined' && Reactions.init) {
            Reactions.init();
        }
    });
} else {
    // 如果DOM已经加载完成，直接初始化
    if (typeof Reactions !== 'undefined' && Reactions.init) {
        Reactions.init();
    }
}
