export function StateNew() {
    return (<>
    
    <div class="inline-block items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
        NOVO
    </div>

    </>)
}

export function StateShowcase() {
    return (<>
    
    <div class="inline-block items-center bg-yellow-500 text-white text-xs px-2 py-1 ml-3 rounded-lg">
        VITRINE
    </div>

    </>)
}

export function StateUsed() {
    return (<>
    
    <div class="inline-block items-center bg-gray-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
        USADO
    </div>

    </>)
}

export default { StateNew, StateShowcase, StateUsed };