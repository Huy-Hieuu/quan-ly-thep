
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getInventoryInsights = async (inventoryData: any) => {
  if (!API_KEY) return "Vui lòng cấu hình API Key để sử dụng tính năng này.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const prompt = `Dựa trên dữ liệu tồn kho thép sau đây, hãy đưa ra 3 lời khuyên ngắn gọn cho quản lý: ${JSON.stringify(inventoryData)}. Trả về định dạng JSON với mảng "insights" chứa các chuỗi tiếng Việt.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const result = JSON.parse(response.text || '{"insights": []}');
    return result.insights;
  } catch (error) {
    console.error("Gemini Error:", error);
    return ["Không thể lấy thông tin chi tiết từ AI lúc này."];
  }
};
