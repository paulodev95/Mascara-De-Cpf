
// Função para formatar o CPF
function formatCpf() {
    var cpf = document.getElementById("cpf").value;
    var formattedCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
    document.getElementById("cpf").value = formattedCpf;
   }
   
   // Função para formatar o Telefone
   function formatPhone() {
    var phone = document.getElementById("phone").value;
    var formattedPhone = phone.replace(/(\d{2})(\d{5})(\d{4})/g, "(\$1) \$2-\$3");
    document.getElementById("phone").value = formattedPhone;
   }


   // Eventos de "keyup" para os campos CPF e Telefone
   document.getElementById("cpf").addEventListener("keyup", formatCpf);
   document.getElementById("phone").addEventListener("keyup", formatPhone);
   