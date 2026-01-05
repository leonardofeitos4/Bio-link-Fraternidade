document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Clique no link:', link.innerText);
  });
});

// =====================================================
// MODAL WHATSAPP FSC - VERSÃO FINAL
// =====================================================

function abrirZapModal(){
  document.getElementById("zapOverlay").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function fecharZapModal(){
  document.getElementById("zapOverlay").style.display = "none";
  document.body.style.overflow = "";
}

function enviarLead(){
  const nome   = document.getElementById("z_nome").value.trim();
  const email  = document.getElementById("z_email").value.trim();
  const tel    = document.getElementById("z_tel").value.trim();

  if(!nome || !email || !tel){
    alert("Preencha nome, e-mail e telefone.");
    return;
  }

  const msg =
    `Olá! Vim pelo site.%0A%0A`+
    `Nome: ${nome}%0A`+
    `Email: ${email}%0A`+
    `Telefone: ${tel}%0A`;

  window.open("https://wa.me/5583996666285?text="+msg, "_blank");

  fetch("https://formsubmit.co/ajax/suportedados@exiba.com.br", {
    method: "POST",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({
      Nome: nome,
      Email: email,
      Telefone: tel
    })
  });

  fecharZapModal();

  document.getElementById("z_nome").value = "";
  document.getElementById("z_email").value = "";
  document.getElementById("z_tel").value = "";
}
