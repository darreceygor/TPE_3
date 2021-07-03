const d = document
const url=`https://60c96f9a772a7600172037ef.mockapi.io/api/productos/productos/`

  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch(url),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    console.log(json);
    json.forEach(el => {
        itemN(el);

        itemEdit(el);

        $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrió un error 5";
    $table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
  }
}

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async e => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      
      await crearItem(e); // llama a crearItem - NUEVO

    } else {
      
      await editarItem(e); //llama a editaritem - ACTUALIZAR
    }
  }
});

d.addEventListener("click", async e => {
  if (e.target.matches(".edit")) {
    $title.textContent = `Edit ID ${e.target.dataset.id}` ;
    
    
    $form.id.value = e.target.dataset.id,
    $form.marca.value = e.target.dataset.marca,
    $form.modelo.value = e.target.dataset.modelo,
    $form.precio.value = e.target.dataset.precio,
    $form.obslinea1.value = e.target.dataset.obslinea1,
    $form.obslinea2.value = e.target.dataset.obslinea2,
    $form.obslinea3.value = e.target.dataset.obslinea3;

  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

    if (isDelete) {
            await borrarItem(e);
    }
  }
})

function itemEdit(el) {
    $template.querySelector(".edit").dataset.id = el.id;
    $template.querySelector(".edit").dataset.marca = el.marca;
    $template.querySelector(".edit").dataset.modelo = el.modelo;
    $template.querySelector(".edit").dataset.precio = el.precio;
    $template.querySelector(".edit").dataset.obslinea1 = el.obslinea1;
    $template.querySelector(".edit").dataset.obslinea2 = el.obslinea2;
    $template.querySelector(".edit").dataset.obslinea3 = el.obslinea3;
}

function itemN(el) {
    $template.querySelector(".id").textContent = el.id;
    $template.querySelector(".marca").textContent = el.marca;
    $template.querySelector(".modelo").textContent = el.modelo;
    $template.querySelector(".precio").textContent = el.precio;
    $template.querySelector(".url").textContent = el.url;
    $template.querySelector(".obslinea1").textContent = el.obslinea1;
    $template.querySelector(".obslinea2").textContent = el.obslinea2;
    $template.querySelector(".obslinea3").textContent = el.obslinea3;
}

async function borrarItem(e) {
    try {
        let options = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        }, res = await fetch(`${url}${e.target.dataset.id}`, options), json = await res.json();

        if (!res.ok)
            throw { status: res.status, statusText: res.statusText };

        location.reload();
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        alert(`Error ${err.status}: ${message}`);
    }
}

async function editarItem(e) {
    try {
        let options = {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                marca: e.target.marca.value,
                modelo: e.target.modelo.value,
                precio: e.target.precio.value,
                obslinea1: e.target.obslinea1.value,
                obslinea2: e.target.obslinea2.value,
                obslinea3: e.target.obslinea3.value
            })
        }, res = await fetch(`${url}${e.target.id.value}`, options), json = await res.json();

        if (!res.ok)
            throw { status: res.status, statusText: res.statusText };

        location.reload();
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}

async function crearItem(e) {
    try {
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                marca: e.target.marca.value,
                modelo: e.target.modelo.value,
                precio: e.target.precio.value,
                obslinea1: e.target.obslinea1.value,
                obslinea2: e.target.obslinea2.value,
                obslinea3: e.target.obslinea3.value,
            })
        }, res = await fetch(url, options), json = await res.json();

        if (!res.ok)
            throw { status: res.status, statusText: res.statusText };

        location.reload();
    } catch (err) {
        let message = err.statusText || "Ocurrió un error 3";
        $form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
    }
}
