<template>
  <div class="container">
    <img src="/1.gif" alt="image1" class="info-img"> <br>
    <img src="/2.gif" alt="image1" class="info-img"> <br>
    <input v-model="title" class="title-input no-border" style="color: red;font-weight: bold;" />
    <p style="display: flex; justify-content: center; align-items: center; margin-top: -10px;">
      <input v-model="amount" class="amount no-border" />
      <img src="/3.gif" alt="image1" class="info-img" style="margin-inline-start: -740px;" id="info-img">
      <input v-model="percentage" class="percentage no-border" style="margin-inline-start: -500px;" />
      <img src="/4.gif" alt="image" class="info-img" style="margin-inline-start: -770px;" id="info1-img">
    </p>
    <input v-model="bankInfo1" class="bank-info-input no-border" style="margin-top: -60px;"/>
    <div class="address">
      <input v-model="domicilioSocial" class="address-input no-border" />
    </div>
    <div class="transaction-details">
      <input v-model="transactionInfo1" class="transaction-input no-border" style="text-decoration: underline; color: blue;" />
      <input v-model="transactionInfo2" class="transaction-input no-border" style="text-decoration: underline; color: blue;"/>
      <input v-model="transactionInfo3" class="transaction-input no-border" style="text-decoration: underline; color: blue;"/>
    </div>
    <input v-model="bankName" class="bank-name-input no-border" />
    <input v-model="beneficiaryName1" class="beneficiary-name-input no-border" style="text-decoration: underline blue ; color: red; font-weight: bold;" />
    <input v-model="currencySymbol" class="currency-symbol-input no-border" />
    <textarea v-model="transferDetails" class="transfer-details-input no-border"></textarea>
    <input v-model="beneficiaryName2" class="highlighted-name-input no-border" style="text-decoration: underline red ; color: red; font-weight: bold;" />
    <input v-model="sectionTitle" class="section-title-input no-border" />
    <input v-model="country" class="country-input no-border" style="color: red; font-weight: bold;" />
    <input v-model="iban" class="iban-input no-border" />
    <textarea v-model="beneficiaryInfo" class="beneficiary-info-input no-border" style="color: red; font-weight: bold;"></textarea>
    <textarea v-model="state" class="state-input no-border"></textarea>
    <p style="display: flex; justify-content: center; align-items: center;">
      <input v-model="amount" class="amount no-border" />
      <img src="/3.gif" alt="image1" class="info-img" style="margin-inline-start: -740px;" id="info-img">
      <input v-model="percentage" class="percentage no-border" style="margin-inline-start: -500px;" />
      <img src="/4.gif" alt="image" class="info-img" style="margin-inline-start: -770px;" id="info1-img">
    </p>
    <textarea v-model="advice" class="advice-input no-border"></textarea>
    <p style="display: flex; justify-content: center; align-items: center;">
      <input v-model="amount" class="amount no-border" />
      <img src="/3.gif" alt="image1" class="info-img" style="margin-inline-start: -740px;" id="info-img">
      <input v-model="percentage2" class="percentage no-border" style="margin-inline-start: -500px;"/>
      <img src="/4.gif" alt="image" class="info-img" style="margin-inline-start: -770px;" id="info1-img">
    </p>
    <p class="final-info">
      <img src="/5.gif" alt="image1" class="info-img"> <br>
    </p>
    <button @click="generateLink">Enregistrer</button>
    <p v-if="generatedLink">Lien généré : <a :href="generatedLink" target="_blank">{{ generatedLink }}</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'VALIDACIÓN DE TRANSFERENCIA VÍA WESTERN RAMIREZ MRIN JAIME ARNOBIO UNION',
      amount: '980.000 €',
      percentage: '37%',
      percentage2: '100%',
      bankInfo1: 'BANCO INTERNACIONAL BNP PARIBAS S.A. CON UN CAPITAL DE 2.507.455.130 Euros-F. R. N° 0100545 R',
      domicilioSocial: 'Domicilio social: 16 boulevard des Italiens 01Bp 1413 Paris 01 República Francesa.',
      transactionInfo1: 'TRANSFERENCIA SEPA ONLINE DE 980.000€ ABONO EN LA CUENTA WESTERN UNION Sr.',
      transactionInfo2: 'RAMIREZ MARIN JAIME ARNOBIO',
      transactionInfo3: '4268 8100 0000 0000 *******% 980 000€',
      bankName: 'BANCO BNP Paribas Bienvenido DON',
      beneficiaryName1: 'RAMIREZ MRIN JAIME ARNOBIO',
      currencySymbol: '&€',
      transferDetails: 'su transferencia Activación y en tu area de clientes Estado de tu transferencia ¿Tu tarjeta bancaria responde a tus besos? Nombre y apellidos del beneficiario IBAN / Nombre de cuenta Valor DON 980.000€',
      beneficiaryName2: 'RAMIREZ MRIN JAIME ARNOBIO',
      sectionTitle: '2S: BANCAIRE',
      country: 'ESPANAS',
      iban: '🇪🇦🏦 IBAN',
      beneficiaryInfo: 'NCMX&€ &: \nAMIREZ MRIN JAIME ARNOBIO',
      state: '980,00 € Estado de colocación Nombre del banco del beneficiario Tomada "BANCAIRE BNP Paribas BY• ПАДА Cola bloqueada para donaciones PR 35-3608105 138212139512143 BANQUE BNP S PA 1 0 0%',
      advice: '*CONSEJOS DE CARGA.. Felicitaciones por la transacción de 980,00 € que se procesó con éxito el 10 de abril de 2024. Le pedimos que pague la tarifa de transferencia que asciende a 300 € para adquirir los 980 000 €. 100% disponible en tu cuenta de Western Union después de recibir los fondos te enviaremos el recibo comprobando que recibiste una transacción por Western Union, buena suerte *',
      generatedLink: null
    };
  },
  methods: {
    generateLink() {
      const data = {
        title: this.title,
        amount: this.amount,
        percentage: this.percentage,
        percentage2: this.percentage2,
        bankInfo1: this.bankInfo1,
        bankInfo2: this.bankInfo2,
        domicilioSocial: this.domicilioSocial,
        transactionInfo1: this.transactionInfo1,
        transactionInfo2: this.transactionInfo2,
        transactionInfo3: this.transactionInfo3,
        bankName: this.bankName,
        welcomeMessage: this.welcomeMessage,
        beneficiaryName1: this.beneficiaryName1,
        currencySymbol: this.currencySymbol,
        transferDetails: this.transferDetails,
        beneficiaryName2: this.beneficiaryName2,
        sectionTitle: this.sectionTitle,
        country: this.country,
        iban: this.iban,
        beneficiaryInfo: this.beneficiaryInfo,
        state: this.state,
        advice: this.advice,
        finalPercentage: this.finalPercentage
      };
      const encodedData = encodeURIComponent(JSON.stringify(data));
      const uniqueId = Date.now();
      localStorage.setItem(`formData_${uniqueId}`, encodedData);
      this.generatedLink = `${window.location.origin}/readonly/${uniqueId}`;
    }
  }
};
</script>

<style scoped>
/* Same styles as before */
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

.title-input, .amount, .percentage, .final-percentage, .bank-info-input, .address-input, .transaction-input, .bank-name-input, .welcome-input, .beneficiary-name-input, .currency-symbol-input, .highlighted-name-input, .section-title-input, .country-input, .iban-input, .beneficiary-info-input, .state-input, .advice-input,.transfer-details-input{
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  border: none; /* Remove borders */
}

.no-border {
  border: none; /* Remove borders */
}

textarea {
  resize: none;
  height: 100px;
}

.amount, .percentage, .final-percentage {
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

.beneficiary-info-input, .state-input, .advice-input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  border: none; /* Remove borders */
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

#info-img{
  width: 100px;
  height: 10px;
  margin-bottom: 25px;
}
#info1-img{
  width: 50px;
  height: 20px;
  margin-bottom: 25px;
}
</style>