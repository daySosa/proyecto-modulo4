$(function () {
  var $btn = $('#btnContacto');

  $('#modalContacto')
    .on('show.bs.modal', function () {
      console.log('El modal comienza a abrirse (show.bs.modal)');
      $btn.prop('disabled', true)
        .removeClass('btn-outline-success')
        .addClass('btn-secondary');
    })
    .on('shown.bs.modal', function () {
      console.log('El modal se terminó de abrir (shown.bs.modal)');
    })
    .on('hide.bs.modal', function () {
      console.log('El modal comienza a ocultarse (hide.bs.modal)');
      $btn.prop('disabled', false)
        .removeClass('btn-secondary')
        .addClass('btn-outline-success');
    })
    .on('hidden.bs.modal', function () {
      console.log('El modal se terminó de ocultar (hidden.bs.modal)');
    });
});
