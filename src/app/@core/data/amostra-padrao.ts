import { AmostraClasse } from './amostra-classe';

export const Modelo: AmostraClasse = {
    id: 2,
    nome: '',
    matriz: '',
    dopantes: '',
    autor: '',
    local: '',

    matrizcomp_1: 'Nada', concen_matrizcomp_1: 0,
    matrizcomp_2: 'Nada', concen_matrizcomp_2: 0,
    matrizcomp_3: 'Nada', concen_matrizcomp_3: 0,
    matrizcomp_4: 'Nada', concen_matrizcomp_4: 0,

    dopantecomp_1: 'Nada', concen_dopantecomp_1: 0,
    dopantecomp_2: 'Nada', concen_dopantecomp_2: 0,
    dopantecomp_3: 'Nada', concen_dopantecomp_3: 0,
    dopantecomp_4: 'Nada', concen_dopantecomp_4: 0,

    npcomp_1: 'AgNO3', concen_npcomp_1: 0,
    npcomp_2: 'Nada', concen_npcomp_2: 0,
    npcomp_3: 'Nada', concen_npcomp_3: 0,
    npcomp_4: 'Nada', concen_npcomp_4: 0,

    fusao_temperatura: 0, fusao_tempo: 0,
    trat_temperatura: 0, trat_tempo: 0,

    fusao_forno: '?', fusao_forno_rampa: 0,
    trat_forno: '?', trat_forno_rampa: 0,

    agita_tipo: 'Nunhuma', agita_texto: '',

    nucle_temperatura: 0, nucle_tempo: 0,
    nucle_forno: '?', nucle_forno_rampa: 0,
    nucle_ciclos: 0, processos_obs: '',

    refusao_fusao_temperatura: 0, refusao_fusao_tempo: 0,
    refusao_trat_temperatura: 0, refusao_trat_tempo: 0,
    refusao_forno_fusao: '?', refusao_forno_trat: '?',
    refusao_numero: 0, refusao_agita: 'Nunhuma',
    refusao_obs: '',
};
