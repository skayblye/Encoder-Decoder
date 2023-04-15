import { Buffer } from 'buffer';
import base32 from 'base32';
import base58 from 'bs58';
import { Base91 } from "@hpcc-js/wasm";

const base91 = await Base91.load();

const error_encode = "Error: Could not encode text";
const error_decode = "Error: Could not decode text";

// *******************************************************
//base 64
// *******************************************************
export function base64_encode(text: string): string {
  try {
    const encoded = btoa(text);
    return encoded;
  } catch {
    return error_encode;
  }
}

export function base64_decode(text: string): string {
  try {
    const decoded = atob(text);
    return decoded;
  } catch {
    return error_decode;
  }
}
// *******************************************************
//base 32
// *******************************************************
export function base32_encode(text: string): string {
  try {
    const encoded = base32.encode(text)
    return encoded;
  } catch {
    return error_encode;
  }
}

export function base32_decode(text: string): string {
  try {
    const decoded = base32.decode(text);
    return decoded;
  } catch {
    return error_decode;
  }
}
// *******************************************************
//base 58
// *******************************************************
export function base58_encode(text: string): string {
  try {
    const encoded = base58.encode(Buffer.from(text))
    return encoded;
  } catch {
    return error_encode;
  }
}

export function base58_decode(text: string): string {
  try {
    const decoded = Buffer.from(base58.decode(text)).toString('utf8');
    return decoded;
  } catch {
    return error_decode;
  }
}
// *******************************************************
//base 91
// *******************************************************
export function base91_encode(text: string): string {
  try {
    const encoded = base91.encode(Buffer.from(text))
    return encoded;
  } catch {
    return error_encode;
  }
}

export function base91_decode(text: string): string {
  try {
    const decoded = Buffer.from(base91.decode(text)).toString('utf8');
    return decoded;
  } catch {
    return error_decode;
  }
}