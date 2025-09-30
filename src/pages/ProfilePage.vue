<template>
<div>
  <HeaderPage />
  <SideBar />
  <div class="q-pa-md">
    <div class="column items-center q-gutter-md">

      <!-- پیش‌نمایش تصویر پروفایل -->
      <q-avatar size="120px">
        <q-img
          :src="preview || 'https://cdn.quasar.dev/img/avatar.png'"
          spinner-color="primary"
        />
      </q-avatar>

      <!-- انتخاب فایل تصویر -->
      <q-file
        v-model="file"
        label="انتخاب عکس پروفایل"
        accept="image/*"
        filled
        clearable
        @update:model-value="onFileSelected"
      >
        <template v-slot:prepend>
          <q-icon name="image" />
        </template>
      </q-file>
    </div>
  </div>
</div>
</template>
<script setup>
import HeaderPage from 'src/components/HeaderPage.vue'
import SideBar from 'src/components/SideBar.vue'
import { ref } from 'vue'

const file = ref(null)
const preview = ref(null)

const onFileSelected = (newFile) => {
  if (newFile) {
    const reader = new FileReader()
    reader.onload = (e) => {
      preview.value = e.target.result
    }
    reader.readAsDataURL(newFile)
  } else {
    preview.value = null
  }
}

</script>
<style></style>
