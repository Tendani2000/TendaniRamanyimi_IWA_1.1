/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event) => {}
const handleAddToggle = (event) => {}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

const addCancel = document.querySelector('data-add-overlay')
addCancel.addEventListener('click', handleAddToggle)

const add = document.querySelector('.button button_primary')
add.addEventListener('click', handleAddToggle)

const submit = document.querySelector('submit')
submit.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)

const editCancel = document.querySelector('data-edit-cancel')
editCancel.addEventListener('click', handleEditToggle)

const editForm = document.querySelector('.button button_primary')
editForm.addEventListener('submit', handleEditSubmit)

const editDelete = document.querySelector('data-edit-delete')
editDelete.addEventListener('click', handleDelete)

const help = document.querySelector('data-help')
help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}