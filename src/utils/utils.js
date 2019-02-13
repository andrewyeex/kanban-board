export const setColumn = title => ({
  title,
  data : [
    {
      isCompleted : false,
      description : 'Description'
    }
  ]
})

export const setItem = description => ({
  isCompleted : false,
  description
})