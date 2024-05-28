// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CheckboxItem from './components/CheckboxItem.vue'

// 전역 컴포넌트 테스트
createApp(App)
    .component('CheckboxItem', CheckboxItem)
    .mount('#app')

// 지역 컴포넌트 테스트
// createApp(App).mount('#app')