function spinalCase(str) {
  str = str.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(' ').join('-');
  return str;
}

spinalCase('This Is Spinal Tap');
