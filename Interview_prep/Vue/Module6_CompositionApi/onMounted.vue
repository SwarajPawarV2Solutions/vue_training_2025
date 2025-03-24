 
 <!-- 
  
 1. onMounted

 onMounted is called once the component is mounted to the DOM. It's the equivalent of Vue 2's mounted hook. -->

 <template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  const message = ref('')
  
  onMounted(() => {
    // Logic to run when the component is mounted
    message.value = 'Component is mounted!'
  })
  </script>
  