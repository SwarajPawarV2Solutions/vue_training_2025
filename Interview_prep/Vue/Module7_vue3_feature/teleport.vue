<!-- 
 1. <Teleport> in Vue 3

    <Teleport> is a built-in component in Vue 3 that allows you to move content from one part of the DOM to another. It is particularly useful for rendering components that should be outside the normal parent-child hierarchy of the component tree, such as modals, tooltips, dropdowns, or popups.
    
    Purpose: The primary purpose of <Teleport> is to render elements outside of their default position in the DOM. This is often needed for overlays or elements that should appear on top of other content, such as modals or tooltips. 

    Syntax:

    <Teleport to="selector">
     Content to be moved 
     </Teleport>

    -->


         <!-- Example -->

    <!-- <Teleport to="body">
        <div class="modal">
          <p>This is a modal!</p>
          <button @click="closeModal">Close</button>
        </div>
      </Teleport>
       -->
<!-- 
       In the above example, the content inside <Teleport> (the modal) will be moved to the <body> tag of the document.

        to="selector": The to attribute specifies where the content will be rendered in the DOM. In the example above, to="body" places the modal inside the <body> tag, regardless of where the <Teleport> tag appears in the component. -->