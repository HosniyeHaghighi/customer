<template>
  <div class="identity-form-container">
    <div class="identity-form-grid">
      <!-- ستون اول -->
      <div class="form-column">
        <div class="form-field">
          <PDropdown
            v-model="formData.customerType"
            title="نوع مشتری"
            placeholder="عادی"
            size="lg"
            :options="customerTypeOptions"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field">
          <PDropdown
            v-model="formData.gender"
            title="جنسیت"
            placeholder="مرد"
            size="lg"
            :options="genderOptions"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field">
          <PDropdown
            v-model="formData.maritalStatus"
            title="وضعیت تاهل"
            placeholder="مجرد"
            size="lg"
            :options="maritalStatusOptions"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field with-action">
          <PTextInput
            v-model="formData.jobTitle"
            placeholder="برنامه‌نویس"
            size="lg"
            :disabled="!isEditing"
          />
          <a href="#" class="field-action-link">ایجاد شغل جدید</a>
        </div>
      </div>

      <!-- ستون دوم -->
      <div class="form-column">
        <div class="form-field">
          <PDropdown
            v-model="formData.nationality"
            title="ملیت"
            placeholder="ایرانی"
            size="lg"
            :options="nationalityOptions"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field">
          <PTextInput
            v-model="formData.firstName"
            title="نام"
            placeholder="محمد عرفان"
            size="lg"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field">
          <PTextInput
            v-model="formData.marriageDate"
            title="تاریخ ازدواج"
            size="lg"
            disabled
          />
        </div>
        <div class="form-field with-action">
          <PTextInput
            title="جستجو در برچسب‌ها"
            size="lg"
            :disabled="!isEditing"
          />
          <a href="#" class="field-action-link">ایجاد برچسب جدید</a>
        </div>
      </div>

      <!-- ستون سوم -->
      <div class="form-column">
        <div class="form-field-group">
          <div class="form-field half-width">
            <PTextInput
              v-model="formData.nationalId"
              title="کد ملی / فراگیر"
              placeholder="۳۲۱۰۰۱۲۳۴۵"
              size="lg"
              :disabled="!isEditing"
            />
          </div>
          <div class="form-field half-width">
             <PTextInput
              v-model="formData.birthCertificateNumber"
              title="شماره شناسنامه"
              placeholder="۳۲۱۰۰۱۲۳۴۵"
              size="lg"
              :disabled="!isEditing"
            />
          </div>
           <div class="form-field full-width">
             <PTextInput
              v-model="formData.birthDate"
              title="تاریخ تولد"
              placeholder="۱۳۸۱/۱۰/۰۶"
              size="lg"
              :disabled="!isEditing"
            />
          </div>
        </div>
         <div class="form-field">
          <PTextInput
            v-model="formData.lastName"
            title="نام خانوادگی"
            placeholder="وصال طلب"
            size="lg"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field">
          <PTextInput
            v-model="formData.officialName"
            title="نام رسمی"
            placeholder="آقای محمد عرفان وصال طلب"
            size="lg"
            :disabled="!isEditing"
          />
        </div>
        <div class="form-field with-action">
          <PTextInput
            v-model="formData.accessLevel"
            placeholder="مدیر"
            size="lg"
            :disabled="!isEditing"
          />
          <a href="#" class="field-action-link">ایجاد دسترسی جدید</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// Assumed component paths
import { PDropdown } from 'pandora-design-system/dropdown'
import { PTextInput } from 'pandora-design-system/text-input'

const isEditing = ref(false)

const formData = reactive({
  customerType: 'normal',
  nationality: 'iranian',
  nationalId: '۳۲۱۰۰۱۲۳۴۵',
  birthCertificateNumber: '۳۲۱۰۰۱۲۳۴۵',
  birthDate: '۱۳۸۱/۱۰/۰۶',
  gender: 'male',
  firstName: 'محمد عرفان',
  lastName: 'وصال طلب',
  officialName: 'آقای محمد عرفان وصال طلب',
  maritalStatus: 'single',
  marriageDate: '',
  jobTitle: 'برنامه‌نویس',
  accessLevel: 'مدیر',
})

// Options for dropdowns
const customerTypeOptions = ref([{ key: 'عادی', value: 'normal' }])
const nationalityOptions = ref([{ key: 'ایرانی', value: 'iranian' }])
const genderOptions = ref([{ key: 'مرد', value: 'male' }, { key: 'زن', value: 'female' }])
const maritalStatusOptions = ref([{ key: 'مجرد', value: 'single' }, { key: 'متاهل', value: 'married' }])
</script>

<style lang="scss" scoped>
.identity-form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); // <-- The 3-column grid structure
  gap: 16px; // Gap between columns
  align-items: start;
}

.form-column {
  display: flex;
  flex-direction: column; // <-- Stacks items vertically inside each column
  gap: 24px; // Gap between form fields within a column
}

.form-field {
  width: 100%;
}

// Wrapper for fields that need to be side-by-side inside a column
.form-field-group {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    .half-width {
        flex: 1 1 calc(50% - 8px); // Allows two fields to sit side-by-side
    }
    .full-width {
        flex: 1 1 100%;
    }
}


.with-action {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-action-link {
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>