import React, { useState, useEffect } from "react";

const KEY = "admin_contact";

export default function AdminContact() {
  const [form, setForm] = useState({ email: "", phone: "", whatsapp: "" });

  useEffect(()=> {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved) setForm(saved);
  }, []);

  const save = () => {
    localStorage.setItem(KEY, JSON.stringify(form));
    alert("Contact saved");
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">📞 Contact Settings</h2>

      <div className="bg-white p-6 rounded shadow">
        <label className="block mb-2">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />

        <label className="block mb-2">Phone</label>
        <input className="w-full p-2 border rounded mb-3" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />

        <label className="block mb-2">WhatsApp (country code + number)</label>
        <input className="w-full p-2 border rounded mb-3" value={form.whatsapp} onChange={(e)=>setForm({...form,whatsapp:e.target.value})} />

        <div className="flex gap-3">
          <button onClick={save} className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
          <button onClick={()=>{ setForm({ email:"", phone:"", whatsapp:"" }); localStorage.removeItem(KEY); }} className="px-4 py-2 border rounded">Clear</button>
        </div>
      </div>
    </section>
  );
}
