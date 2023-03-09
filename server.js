const newFolderName = function (folders) {
  let count = 1
  if (!folders.includes('New Folder')) {
    return 'New Folder'
  }
  for (let i = 0; i < folders.length + 1; i++) {
    if (folders.includes(`New Folder (${i})`)) {
      count++
    }
  }

  return `New Folder (${count + 1})`
}

console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)']))

module.exports = { newFolderName }
