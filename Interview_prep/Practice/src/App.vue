<script lang="ts" setup>

import ParentComponent from "./components/ParentComponent.vue";
import Prop from "./components/prop.vue";

import V_bind from "./components/v_bind.vue";
import V_for from "./components/v_for.vue";
import V_html from "./components/v_html.vue";
import V_if from "./components/v_if.vue";
import V_model from "./components/v_model.vue";
import V_show from "./components/v_show.vue";
import child from "./components/props/child.vue";
import parent from "./components/emit/parent.vue"
</script>


<template>

    <parent/>


    <!-- <V_if />
    <V_for />
    <V_model/>
    <V_bind/>
    <V_html/>
    <V_show/>
    <Prop/>
     -->

<!--.
    1. v-if:- Conditionally render an element based on a boolean value.
    2. v-for:-  Render a list of items by iterating over an array or object.
    3. v-model:-  Create two-way binding between form input elements and data.
    4. v-bind:-  Dynamically bind attributes or properties to an element.
    5. v-on:-  Attach event listeners to elements, allowing for event handling.
    6. v-show:-  Toggle the visibility of an element without removing it from the DOM.
    7. v-html:-  Bind raw HTML content inside an element.
-->
</template>
