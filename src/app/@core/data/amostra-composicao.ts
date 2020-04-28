export class AmostraComposicao {

  constructor(
    public id: number,
    public Nome: string,
    public Matriz: string,
    public Dopantes: string,

    public MatrizComp1: string, public ConcenMatrizComp1: number,
    public MatrizComp2: string, public ConcenMatrizComp2: number,
    public MatrizComp3: string, public ConcenMatrizComp3: number,
    public MatrizComp4: string, public ConcenMatrizComp4: number,

    public DopanteComp1: string, public ConcenDopanteComp1: number,
    public DopanteComp2: string, public ConcenDopanteComp2: number,
    public DopanteComp3: string, public ConcenDopanteComp3: number,
    public DopanteComp4: string, public ConcenDopanteComp4: number,

    public NpComp1: string, public ConcenNpComp1: number,
    public NpComp2: string, public ConcenNpComp2: number,
    public NpComp3: string, public ConcenNpComp3: number,
    public NpComp4: string, public ConcenNpComp4: number,
  ) {  }
  
}