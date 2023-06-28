import {CookieSerializeOptions} from "cookie";

export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string | number | boolean, options: CookieSerializeOptions = {}) {
  options = {
    path: "/",
    ...options,
  };

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    updatedCookie += "; " + optionKey;

    const optionValue = options[optionKey as keyof CookieSerializeOptions];
    if (typeof optionValue === "string" && typeof optionValue === "number") {
      updatedCookie += `=${+optionValue}`;
    } else if (optionValue instanceof Date) {
      updatedCookie += `=${optionValue.toUTCString()}`;
    } else if (typeof optionValue === "boolean" && !optionValue) {
      updatedCookie += `=false}`;
    }
  }

  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, "", {maxAge: -1});
}
