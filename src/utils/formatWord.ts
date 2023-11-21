const removeAccents = (str: string): string => {
  const AccentsMap: string[] = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ", "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ"
  ];

  AccentsMap.forEach(map => {
    const regex = new RegExp('[' + map.substr(1) + ']', 'g');
    const accentChar = map[0];
    str = str.replace(regex, accentChar);
  });

  return str.toLowerCase().replace(/\s+/g, ' ');
}

export default removeAccents;
