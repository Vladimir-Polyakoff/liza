<template>
  <section class="contact adjust" id="contact">
    <div class="title">
      <h2>Анкета</h2>
    </div>
    <div class="contact-form">
      <div class="row">
        <input type="text" name="" placeholder="Имя">
        <input type="text" name="" placeholder="Фамилия">
      </div>
      <div class="row">
        <input type="text" name="" placeholder="Email">
        <input type="text" name="" placeholder="мобильный телефон">
      </div>
      <div class="row2">
        <textarea placeholder="Message"></textarea>
      </div>
      <div class="row2">
        <input type="submit" value="Send">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheQuestionnaire'
}
</script>

<style scoped>

.contact {
  height: 720px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.contact-form {
  position: relative;
  width: 100%;
  width: 900px;
  margin-top: 70px;
}

.row {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
}

.row2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.row input,
.row2 textarea {
  width: 100%;
  padding: 10px;
  outline: none;
  color: var(--black);
  background: var(--white2);
  font-style: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.row textarea {
  resize: none;
  height: 200px;
}

input[type="submit"] {
  background: var(--black2);
  color: #fff;
  padding: 10px 30px;
  display: inline-block;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  max-width: 150px;
  border: none;
}

.title h2 {
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 40px;
  margin-top: 70px;
}

.title h2::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  width: 50px;
  height: 1px;
  background: var(--black);
}

@media (max-width: 992px) {
  .adjust {
    padding: 0 20px;
  }
}

@media (max-width: 767px) {
  .row {
    grid-template-columns: repeat(1, 1fr);
  }

  .contact {
    margin-bottom: 100px;
  }
}
</style>
