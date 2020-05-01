export class AmostraClasse {
  constructor(
// Dados bascos da Amostra
    public id: number,
    public nome: string,
    public matriz: string,
    public dopantes: string,
    public autor: string,
    public local: string,
// Elementos da composição da matriz
    public matrizcomp_1: string, public concen_matrizcomp_1: number,
    public matrizcomp_2: string, public concen_matrizcomp_2: number,
    public matrizcomp_3: string, public concen_matrizcomp_3: number,
    public matrizcomp_4: string, public concen_matrizcomp_4: number,
// Elementos da composição dos dopantes
    public dopantecomp_1: string, public concen_dopantecomp_1: number,
    public dopantecomp_2: string, public concen_dopantecomp_2: number,
    public dopantecomp_3: string, public concen_dopantecomp_3: number,
    public dopantecomp_4: string, public concen_dopantecomp_4: number,
// Elementos da composição das nanoparticulas
    public npcomp_1: string, public concen_npcomp_1: number,
    public npcomp_2: string, public concen_npcomp_2: number,
    public npcomp_3: string, public concen_npcomp_3: number,
    public npcomp_4: string, public concen_npcomp_4: number,
  ) {  }

}
