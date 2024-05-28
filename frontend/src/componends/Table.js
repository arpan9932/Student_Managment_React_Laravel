import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";

export default function Table() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const response = await http.get("/student");
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else if (response.data && Array.isArray(response.data.students)) {
        setStudents(response.data.students);
      } else {
        console.error("Expected an array of students");
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const deleteStudent = (id) => {
    http.delete('/student/'+id).then(res=>{
        fetchAllStudents();
    })
}


  return (
    <div className="container mt-5">
      <section className="intro">
        <div className="gradient-custom-2 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table table-dark table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Roll</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Age</th>
                          <th scope="col">Address</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, id) => (
                          <tr key={id}>
                            <th>{student.id}</th>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td><Link to={{ pathname: "/edit/" + student.id }}><i class="bi bi-pencil-square"></i></Link></td>
                            <td> <i
                                className="bi bi-trash"
                                style={{ cursor: "pointer" }}
                                onClick={()=>{deleteStudent(student.id)}}
                              ></i></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
