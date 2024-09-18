export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}

export function convertStringtoUrl(value: string): string {
  // loại bỏ dấu tiếng việt
  let str = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, 'd').replace(/Đ/g, 'D').replaceAll("?", '');

  let noSpaceStr = str.replace(/\s/g, "-");

  // Chuyển chữ cái sang chữ thường
  let lowercaseStr = noSpaceStr.toLowerCase();

  // Thêm dấu gạch chéo ở đầu
  let finalStr = "/" + lowercaseStr;

  return finalStr;
}
