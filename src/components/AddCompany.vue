<template>
  <form action="">
    <div class="inpcat">
      <label for="compname">Назва:</label>
      <input type="text" name="compname" placeholder="Назва підприємства" :company="company" value="{{company.name}}" />
    </div>
    <div class="inpcat">
      <label for="or">Особовий рахунок</label>
      <input type="text" name="or" placeholder="Особовий рахунок" value="" />
    </div>
    <div class="inpcat">
      <label for="edrpou">ЄДРПОУ</label>
      <input type="text" name="edrpou" placeholder="ЄДРПОУ" value="" />
    </div>
    <div class="inpcat">
      <label for="iban">IBAN</label>
      <input type="text" name="iban" placeholder="IBAN" value="" />
    </div>
    <div class="inpcat">
      <label for="serv">Послуги</label>
      <div>
        <input type="text" placeholder="IBAN" value="" />
        <input type="button" value="Додати послугу" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddCompany',
  components: {
    //ComunalOrders
  },
  props: {
    company: Object
    //services: Array
  }
}
</script>

<style>
</style>