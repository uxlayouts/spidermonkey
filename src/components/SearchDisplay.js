import React from 'react';

export default function SearchDisplay({ peopleFiltered, handleChangeCallback, handleClickCallback }) {
  return (
    <div className="container-fluid padding-top-3 padding-bottom-3">
      <h3><strong>Search</strong></h3>
      <input type="text" onChange={ handleChangeCallback } />
      <br />
      <br />
      <br />
      <div className="row">
        {
          peopleFiltered.map( person =>
            <div key={person.id} className="col-md-3 margin-bottom-1" onClick={handleClickCallback} >
              <div className="card card-lg rounded-md text-center border zoom hover">
                <div className="card-block">
                  <h5>{person.participant_name}</h5>
                  <p>{person.client_id}</p>
                  <p>{person.employee_id}</p>
                  <p>{person.account_number}</p>
                  <p>{person.plan_admin}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};
