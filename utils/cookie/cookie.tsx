export function setCookie(
  cname: string,
  cvalue: string,
  exdays: number,
  remove: boolean = false
) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires =
    "expires=" + (remove ? "Thu, 01 Jan 1970 00:00:01 GMT" : d.toUTCString());
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function removeCookie(cname: string) {
  const d = new Date();
  let expires = "expires=" + "Thu, 01 Jan 1970 00:00:01 GMT";
  document.cookie = cname + "=" + "" + ";" + expires + ";path=/";
}
export function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
