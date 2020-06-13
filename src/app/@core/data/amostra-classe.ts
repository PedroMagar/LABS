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
// Elementos do processo de produção
    public fusao_temperatura: number, public fusao_tempo: number,
    public trat_temperatura: number, public trat_tempo: number,
    public fusao_forno: string, public fusao_forno_rampa: number,
    public trat_forno: string, public trat_forno_rampa: number,
    public agita_tipo: string, public agita_texto: string,
    public nucle_temperatura: number, public nucle_tempo: number,
    public nucle_forno: string, public nucle_forno_rampa: number,
    public nucle_ciclos: number, public processos_obs: string,
    public refusao_fusao_temperatura: number, public refusao_fusao_tempo: number,
    public refusao_trat_temperatura: number, public refusao_trat_tempo: number,
    public refusao_forno_fusao: string, public refusao_forno_trat: string,
    public refusao_numero: number, public refusao_agita: string,
    public refusao_obs: string,
    
  ) {  }

}
