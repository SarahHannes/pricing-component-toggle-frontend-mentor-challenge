const basicPrice = document.querySelector(".basic-price");
const proPrice = document.querySelector(".pro-price");
const masterPrice = document.querySelector(".master-price");
const toggle = document.querySelector(".toggle__input");

const prices = {
  basic: { annual: "199.99", month: "19.99" },
  pro: { annual: "249.99", month: "24.99" },
  master: { annual: "399.99", month: "39.99" },
};

toggle.addEventListener("change", function () {
  let selection = "annual";
  if (toggle.checked) {
    selection = "month";
  } else {
    selection = "annual";
  }

  basicPrice.textContent = prices["basic"][selection];
  proPrice.textContent = prices["pro"][selection];
  masterPrice.textContent = prices["master"][selection];
});
