export function Search() {
  return (
    <div className="mx-auto mt-20 flex flex-col gap-3">
      <div className="flex justify-between">
        <h2 className="text-lg text-base_subtitle">Publicações</h2>
        <span className="text-sm text-base_span">6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="rounded-md border-base_border bg-base_input px-4 py-3 text-white placeholder:text-base_label"
      />
    </div>
  )
}
