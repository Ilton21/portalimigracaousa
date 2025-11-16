export default function Footer() {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-6xl mx-auto p-8 flex flex-col sm:flex-row 
justify-between items-start gap-6">
        <div>
          <h4 className="font-bold">Siga-nos</h4>
          <p className="mt-2 text-sm text-gray-600">Redes sociais e links 
úteis.</p>
        </div>
        <div className="flex-1">
          <h4 className="font-bold">Fale conosco</h4>
          <form className="mt-3 grid sm:grid-cols-2 gap-3">
            <input placeholder="Nome" className="p-3 border rounded-md" />
            <input placeholder="Email" className="p-3 border rounded-md" 
/>
            <textarea placeholder="Mensagem" className="p-3 border 
rounded-md sm:col-span-2" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md 
sm:col-span-2">Enviar</button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 text-sm text-gray-500">© 2025 
Portal Imigração USA. Todos os direitos reservados.</div>
    </footer>
  )
}

