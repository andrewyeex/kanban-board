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