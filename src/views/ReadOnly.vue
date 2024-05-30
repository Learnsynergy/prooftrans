<template>
  <div class="container">
    <img src="/1.gif" alt="image1" class="info-img"> <br>
    <img src="/2.gif" alt="image1" class="info-img"> <br>
    <p class="title-input" style="color: red; font-weight: bold;">{{ title }}</p>
    <p style="display: flex; justify-content: center; align-items: center; margin-top: -10px;">
      <span class="amount">{{ amount }}</span>
      <img src="/3.gif" alt="image1" class="info-img" style="margin-inline-start: -740px;" id="info-img">
      <span class="percentage" style="margin-inline-start: -500px;">{{ percentage }}</span>
      <img src="/4.gif" alt="image" class="info-img" style="margin-inline-start: -770px;" id="info1-img">
    </p>
    <p class="bank-info-input" style="margin-top: -20px;">{{ bankInfo1 }}</p>
    <div class="address">
      <p class="address-input">{{ domicilioSocial }}</p>
    </div>
    <div class="transaction-details">
      <p class="transaction-input" style="text-decoration: underline; color: blue;">{{ transactionInfo1 }}</p>
      <p class="transaction-input" style="text-decoration: underline; color: blue;">{{ transactionInfo2 }}</p>
      <p class="transaction-input" style="text-decoration: underline; color: blue;">{{ transactionInfo3 }}</p>
    </div>
    <p class="bank-name-input">{{ bankName }}</p>
    <p class="beneficiary-name-input" style="text-decoration: underline blue; color: red; font-weight: bold;">{{ beneficiaryName1 }}</p>
    <p class="currency-symbol-input">{{ currencySymbol }}</p>
    <p class="transfer-details-input">{{ transferDetails }}</p>
    <p class="highlighted-name-input" style="text-decoration: underline red; color: red; font-weight: bold;">{{ beneficiaryName2 }}</p>
    <p class="section-title-input">{{ sectionTitle }}</p>
    <p class="country-input" style="color: red; font-weight: bold;">{{ country }}</p>
    <p class="iban-input">{{ iban }}</p>
    <p class="beneficiary-info-input" style="color: red; font-weight: bold;">{{ beneficiaryInfo }}</p>
    <p class="state-input">{{ state }}</p>
    <p style="display: flex; justify-content: center; align-items: center;">
      <span class="amount">{{ amount }}</span>
      <img src="/3.gif" alt="image1" class="info-img" style="margin-inline-start: -740px;" id="info-img">
      <span class="percentage" style="margin-inline-start: -500px;">{{ percentage }}</span>
      <img src="/4.gif" alt="image" class="info-img" style="margin-inline-start: -770px;" id="info1-img">
    </p>
    <p class="advice-input">{{ advice }}</p>
    <p style="display: flex; justify-content: center; align-items: center;">
      <span class="amount">{{ amount }}</span>
      <img src="/3.gif" alt="image1" class="info-img" style="margin-inline-start: -740px;" id="info-img">
      <span class="percentage2" style="margin-inline-start: -500px;">{{ percentage2 }}</span>
      <img src="/4.gif" alt="image" class="info-img" style="margin-inline-start: -770px;" id="info1-img">
    </p>
    <p class="final-info">
      <img src="/5.gif" alt="image1" class="info-img"> <br>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      amount: '',
      percentage: '',
      percentage2: '',
      bankInfo1: '',
      domicilioSocial: '',
      transactionInfo1: '',
      transactionInfo2: '',
      transactionInfo3: '',
      bankName: '',
      beneficiaryName1: '',
      currencySymbol: '',
      transferDetails: '',
      beneficiaryName2: '',
      sectionTitle: '',
      country: '',
      iban: '',
      beneficiaryInfo: '',
      state: '',
      advice: ''
    };
  },
  created() {
    const uniqueId = this.$route.params.id;
    const encodedData = localStorage.getItem(`formData_${uniqueId}`);
    if (encodedData) {
      const data = JSON.parse(decodeURIComponent(encodedData));
      Object.assign(this, data);
    } else {
      // Handle the case where the data is not found (e.g., show an error message)
    }
  }
};
</script>
<style scoped>
/* Same styles as in the main page */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.header-img {
  display: block;
  margin: 0 auto;
}

.title-input, .amount, .percentage, .percentage2, .final-percentage, .bank-info-input, .address-input, .transaction-input, .bank-name-input, .beneficiary-name-input, .currency-symbol-input, .highlighted-name-input, .section-title-input, .country-input, .iban-input, .beneficiary-info-input, .state-input, .advice-input, .transfer-details-input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  border: none; /* Remove borders */
}

textarea {
  resize: none;
  height: 100px;
}

.amount, .percentage, .percentage2, .final-percentage {
  color: red;
  text-decoration: none;
  font-weight: bold;
}

.info-img {
  display: block;
  margin: 0.5rem auto;
  max-width: 100%;
  height: auto;
}

.currency-symbol {
  font-size: 1.5rem;
  text-align: center;
}

.section-title {
  color: black;
}

.country {
  color: red;
}

.iban {
  color: black;
  font-weight: bold;
}

button {
  display: block;
  width: 100%;
  padding: 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

#info-img {
  width: 100px;
  height: 10px;
  margin-bottom: 25px;
}

#info1-img {
  width: 50px;
  height: 20px;
  margin-bottom: 25px;
}
</style>