/**
 * Returns a Column object
 * @param {String} title
 */
export const setColumn = title => ({
  title,
  data : [
    {
      isCompleted : false,
      description : 'Description'
    }
  ]
})
/**
 * Returns an Item object
 * @param {String} description
 */
export const setItem = description => ({
  isCompleted : false,
  description
})
/**
 * Handles the logic when an item is dropped
 * @param {HTMLElement} e
 * @param {Number} targetCol
 * @param {Function} handleDragDropItem
 */
export const handleOnDrop = (e, targetCol, handleDragDropItem) => {
  e.preventDefault()
  const data = JSON.parse(e.dataTransfer.getData("text/plain"))
  if (data.originCol !== targetCol) {
    handleDragDropItem(data, data.originCol, targetCol)
  }
}
/**
 *
 * @param {HTMLElement} e
 * @param {Object} obj
 */
export const handleOnDrag = (e, obj) => e.dataTransfer.setData("text/plain", JSON.stringify(obj))