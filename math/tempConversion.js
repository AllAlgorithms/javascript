// JavaScript Temperature Conversion

// Author: Jay McDoniel

function FtoC (fTemp) {
  return (fTemp - 32) * (5 / 9);
}

function FtoK (fTemp) {
  return (fTemp - 32) * (5 / 9) + 273;
}

function CtoF (cTemp) {
  return cTemp * 9 / 5 + 32;
}

function CtoK (cTemp) {
  return cTemp + 273;
}

function KtoF (kTemp) {
  return (kTemp - 273) * 9 / 5 + 32;
}

function KtoC (kTemp) {
  return kTemp - 273;
}