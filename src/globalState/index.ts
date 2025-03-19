import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

/**
 * チャットの入力テキスト
 */
export const inputText = atomWithReset("");

/**
 * チャットのメッセージリスト
 */
export const messageList = atom([""]);
