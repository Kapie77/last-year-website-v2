# Como burlar a verificação de idade no Archive do website
No navegador aperte F12 -> Console, cole o código abaixo e dê ctrl + enter ou aperte em "run".
```bash
document.querySelectorAll(
  '.age-gate, .age-gate-overlay, .age-gate-wrapper'
).forEach(el => el.remove());

document.documentElement.classList.remove('age-gate-restricted');
document.body.classList.remove('age-restriction');

document.querySelectorAll('body > *').forEach(el => {
  if (el.matches('header, main, footer, #page, .site-content, .site-header, .site-footer')) {
    el.style.display = '';
    el.style.visibility = 'visible';
    el.style.opacity = '1';
  }
});
```

# O que faz a captura do site quebrar
O scripts abaixo faz o site fica atualizando sem parar, o quebrando:
```bash
<script>if (document.location.protocol != "index.html") 
	{document.location = document.URL.replace(/^http:/i, "index.html");}
</script>
```
(O problema é que, quando você abre o HTML diretamente no computador, o protocolo da página é file:, e não https:.)
