function monthlyPayment()
{
  principal = document.getElementById("principal").value;
  deposit = document.getElementById("deposit").value;
  interest = document.getElementById("interest").value;
  years = document.getElementById("years").value;

  totalPrincipal = principal - deposit;
  totalInterest = (interest/100) * totalPrincipal * years;
  totalToPay = totalInterest + totalPrincipal;
  monthlyToPay = totalToPay/years/12;

  document.getElementById("payment").innerHTML = monthlyToPay;
}
