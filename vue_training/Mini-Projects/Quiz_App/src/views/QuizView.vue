<script setup>
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { ref, watch, computed} from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json"

const route = useRoute();
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const currentQuestionIndex =ref(0)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barPercentage  = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length * 100}%`)
   


</script>

<template>
  
    <div>
      <QuizHeader 
        :questionStatus="questionStatus"
      />
      <div>
        <Question :question="quiz.questions[currentQuestionIndex]"/>
      </div>
      <button @click="currentQuestionIndex++">Next Question</button>
    </div>
</template>
