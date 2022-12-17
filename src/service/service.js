// const url = "http://localhost:3001";

//Customers
export function getCustomers() {
  //   return new Promise((resolve, reject) => {
  //     fetch(`${url}/customers`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${JSON.parse(localStorage.getItem("TOKEN"))}`,
  //       },
  //     })
  //       .then((response) => resolve(response.json(response)))
  //       .catch((error) => reject(error));
  //   });
}

export async function postCustomer(customer) {
  //   const token = JSON.parse(localStorage.getItem("TOKEN"));
  //   await fetch(`${url}/customers/edit`, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(customer),
  //   });
  //   return;
}
