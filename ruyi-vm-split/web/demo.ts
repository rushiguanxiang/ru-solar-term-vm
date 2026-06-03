import { RuyiCore } from '../src/core/RuyiCore';

const core = new RuyiCore();

// UI绑定通过回调注入，核心层零DOM依赖
core.onLog = (msg, prose) => { /* addLog实现 */ };
core.onStatus = (hex, field, dst, src, moving, c) => { /* updateUI实现 */ };
core.onInputRequest = async () => {
    return new Promise(resolve => {
        const modal = document.getElementById('inputModal')!;
        modal.style.display = 'flex';
        document.getElementById('modalConfirm')!.onclick = () => {
            const val = (document.getElementById('modalInput') as HTMLInputElement).value.charCodeAt(0) || 32;
            modal.style.display = 'none';
            resolve(val);
        };
    });
};

// 按钮事件绑定、星空绘制等UI逻辑...