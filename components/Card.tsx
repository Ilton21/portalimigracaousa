export default function Card({ title, desc }: { title: string; desc: 
string }) {
  return (
    <article className="p-6 bg-white rounded-2xl shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </article>
  )
}

