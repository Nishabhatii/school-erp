import "./Teacher.css";
export default function TStudentRecord({ students }) {
  return (
    // 
    <TStudentRecord
                  students={[
                    { roll: 1, name: "Riya Sharma", class: "10-A", attendance: 92 },
                    { roll: 2, name: "Arjun Verma", class: "10-A", attendance: 85 },
                    { roll: 3, name: "Kavya Singh", class: "10-B", attendance: 78 },
                  ]}
                />
  );
}
