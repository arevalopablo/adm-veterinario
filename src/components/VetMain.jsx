import React, { useState } from "react";
import Form from "./form/Form";
import { patient } from "./form/formData";
import CustomText from "../shared/CustomText";
import CustomButton from "../shared/CustomButton";
import CustomCard from "../shared/CustomCard";

const VetMain = () => {
  const [state, setState] = useState(true);

  const turnos = [
    {
      mascota: "cacho",
      propietario: "Pablo",
      email: "yourmail@gmail.com",
      fecha: "15.02.2024",
      sintoma: "tos",
    },
    {
      mascota: "pepe",
      propietario: "jose",
      email: "yourmail@gmail.com",
      fecha: "15.04.2024",
      sintoma: "vomita",
    },
    {
      mascota: "pepa",
      propietario: "jose",
      email: "yourmail@gmail.com",
      fecha: "15.05.2022",
      sintoma: "vomita",
    },
  ];

  return (
    <div style={{ margin: "auto" }} className="container py-4">
      <h1 className="my-5 text-center">
        Seguimiento de Pacientes
        <span className="text-violet">Veterinaria</span>
      </h1>

      <CustomText type={"h1"}  />
      <CustomText type={"h3"} />
      <CustomText type={"h6"} />
      <CustomText className={"text-success text-uppercase"} />

      <CustomText
        type={"main"}
        mainText={"Hovha"}
        text={"Hola"}
        mainTextClasses={"text-primary mx-2"}
      />

      <div className="d-flex justify-content-between">
        <div className="w-75 mx-3">
          <div className="my-2 text-center">
            <h2>Formulario</h2>
            <CustomText type={"big"} text={"Formulario"} />
            <p>
              Añade Pacientes y
              <span className="text-violet">Administralos</span>
            </p>
          </div>
          <div className="py-3">
            <form action="">
              {patient.map((data) => (
                <Form {...data} />
              ))}
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  SYMTOMPS?
                </label>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Write your comments"
                ></textarea>
              </div>
              <CustomButton className={'btn btn-dark w-100'} text={'Get appointment'}/>
            </form>
          </div>
        </div>
        {!state ? (
          <div className="m-2 text-center w-100">
            <h2>No hay Pacientes</h2>
            <CustomText type={"big"} text={"No hay pacientes"} />
            <p>
              Comienza cargando pacientes
              <span className="text-violet">y apareceran en este lugar</span>
            </p>
          </div>
        ) : (
          <div className=" w-100 m-2 text-center">
            <h2>Listado de Pacientes</h2>
            <p>
              Administra tus
              <span className="text-violet">Pacientes y Citas</span>
            </p>

            {turnos.map((turno, index) => (
              <CustomCard turno={turno} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VetMain;
