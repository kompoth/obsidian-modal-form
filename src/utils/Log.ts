import { Notice } from "obsidian";
import { ModalFormError } from "./ModalFormError";


export function log_notice(title: string, msg: string | DocumentFragment): void {
    const notice = new Notice("", 15000);
    const el = notice.noticeEl;
    el.empty();
    const head = el.createEl('h6', { text: title })
    const body = el.createEl('div', { text: msg })
    el.append(head, body);
}

export function log_update(msg: string): void {
    log_notice('Modal form update', msg)
}

export function log_error(e: Error | ModalFormError): void {
    if (e instanceof ModalFormError && e.console_msg) {
        log_notice('Modal from error: ', e.message + "\n" + e.console_msg)
        console.error(`Modal form Error:`, e.message, "\n", e.console_msg);
    } else {
        log_notice('Modal from error', e.message)
    }
}
